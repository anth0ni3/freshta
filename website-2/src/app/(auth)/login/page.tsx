import { LoginAuthForm } from '../components/login-form'

export default function LoginPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const error = searchParams?.error

  return (
    // <div className="max-w-sm space-y-4 text-center px-1">
    //   <h1 className="text-3xl font-bold">Welcome back</h1>
    //   <p className="text-sm text-slate-600">Enter your email to sign in to your account</p>
    //   <input
    //     type="email"
    //     inputMode="email"
    //     placeholder="Type here"
    //     className="input input-bordered  rounded-3xl border-black focus:border-primary focus:ring-primary focus:outline-0 w-full"
    //   />

    //   <button className="btn btn-block btn-primary">Sign in with email</button>

    // </div>
    <LoginAuthForm />
  )
}
