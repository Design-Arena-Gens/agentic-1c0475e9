"use client";
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from './ui/Button';
import { useAuthUser } from '@/src/lib/auth';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { user, role } = useAuthUser();

  return (
    <header className="border-b border-black/5 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="font-semibold">RentEase</Link>
        <nav className="flex items-center gap-2">
          <Link href="/dashboard" className="opacity-80 hover:opacity-100">Dashboard</Link>
          <Button variant="ghost" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? 'Light' : 'Dark'}</Button>
          <Link href="/login" className="text-sm opacity-70">{user ? role?.toUpperCase() : 'Login'}</Link>
        </nav>
      </div>
    </header>
  );
}
