import { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { createTransport } from 'nodemailer'

import { db } from '@/lib/db'
import { html, text } from './email'

export const authOptions: NextAuthOptions = {
  // huh any! I know.
  // This is a temporary fix for prisma client.
  // @see https://github.com/prisma/prisma/issues/16117
  adapter: PrismaAdapter(db as any),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    error: '/login',
    signOut: '/login',
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const user = await db.user.findUnique({
          where: {
            email: identifier,
          },
          select: {
            emailVerified: true,
          },
        })

        const transport = createTransport(provider.server)
        const { host } = new URL(url)
        const result = await transport.sendMail({
          to: identifier,
          from: provider.from,
          headers: {
            // Set this to prevent Gmail from threading emails.
            // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.
            'X-Entity-Ref-ID': new Date().getTime() + '',
          },
          subject: `Sign in to ${host}`,
          text: text({ url, host }),
          html: html({ url, host }),
        })
        const failed = result.rejected.concat(result.pending).filter(Boolean)
        if (failed.length) {
          throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`)
        }
      },
    }),
    // EmailProvider({
    //   from: process.env.SMTP_FROM,
    //   sendVerificationRequest: async ({ identifier, url, provider }) => {
    //     const user = await db.user.findUnique({
    //       where: {
    //         email: identifier,
    //       },
    //       select: {
    //         emailVerified: true,
    //       },
    //     })
    //   },
    // }),
  ],
  callbacks: {
    // async session({ token, session }) {
    //   if (token) {
    //     session.user.id = token.id
    //     session.user.name = token.name
    //     session.user.email = token.email
    //     session.user.image = token.picture
    //   }

    //   return session
    // },
    async jwt({ token, user, isNewUser }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        token.id = user?.id
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
  },
}
