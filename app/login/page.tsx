"use client";
import { useEffect, useState } from 'react';
import { Button } from '@/src/components/ui/Button';
import { signInWithGoogle, signInWithEmail, useAuthUser, ensureMockAuthIfNeeded } from '@/src/lib/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const { user, role } = useAuthUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => { ensureMockAuthIfNeeded(); }, []);
  useEffect(() => {
    if (user) router.push('/dashboard');
  }, [user, router]);

  return (
    <div className="max-w-md mx-auto grid gap-4 py-10">
      <h1 className="text-2xl font-semibold">Login</h1>
      <input className="card" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="card" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className="flex gap-3">
        <Button onClick={() => signInWithEmail(email, password)} variant="primary">Sign in</Button>
        <Button onClick={() => signInWithGoogle()} variant="secondary">Google</Button>
      </div>
      <p className="opacity-70 text-sm">Demo mode is enabled if Firebase env vars are missing.</p>
    </div>
  );
}
