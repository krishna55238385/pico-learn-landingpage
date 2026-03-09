import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <div className="text-center text-white/80 space-y-4 max-w-sm">
        <h1 className="text-xl font-bold">Forgot password</h1>
        <p className="text-sm text-white/60">This page is a placeholder. Reset flow can be added here.</p>
        <Link href="/sign-in" className="inline-block text-sm text-white underline underline-offset-2 hover:text-white/80">
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
