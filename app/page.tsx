import { motion } from 'framer-motion';
import { Button } from '@/src/components/ui/Button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="grid gap-8 py-10">
      <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-3xl font-semibold">
        Welcome to RentEase
      </motion.h1>
      <p className="max-w-2xl text-lg opacity-80">
        Manage properties, rooms, bills, and notes with a clean, minimalist dashboard.
      </p>
      <div className="flex gap-4">
        <Link href="/login"><Button variant="primary">Get Started</Button></Link>
        <Link href="/dashboard"><Button variant="ghost">View Dashboard</Button></Link>
      </div>
    </div>
  );
}
