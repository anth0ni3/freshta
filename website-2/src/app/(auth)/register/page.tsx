import Link from 'next/link'

export default function RegisterPage() {
  return (
    <form action="" className="space-y-3">
      <Link href="/" className="text-xl leading-3 font-bold">
        AGENCY
      </Link>
      <h1 className="text-3xl font-bold">Create an account</h1>
      <p className="text-sm text-slate-600">Enter your email below to create your account</p>
      <input
        type="email"
        inputMode="email"
        placeholder="Type here"
        className="input input-bordered  rounded-3xl border-black  focus:border-primary focus:ring-primary focus:outline-0 w-full"
      />
      <button className="btn btn-block btn-primary">Sign up with email</button>
      <p className="px-8 text-center text-sm text-slate-600">
        By clicking continue, you agree to our{' '}
        <Link href="/terms" className="underline hover:text-brand">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className="underline hover:text-brand">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  )
}
