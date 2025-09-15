import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-dvh grid place-items-center p-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm opacity-70">In progress — meanwhile:</p>
        <Link href="/home" className="underline">
          Go to /home
        </Link>
      </div>
    </main>
  );
}
