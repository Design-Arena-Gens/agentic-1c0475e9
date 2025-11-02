"use client";
import { useAuthUser, signOutUser, useRoleRedirect } from '@/src/lib/auth';
import Link from 'next/link';
import { Button } from '@/src/components/ui/Button';
import { motion } from 'framer-motion';

export default function Dashboard() {
  useRoleRedirect();
  const { user, role } = useAuthUser();

  return (
    <div className="grid gap-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex gap-2 items-center">
          <span className="text-sm opacity-70">{role ? role.toUpperCase() : 'GUEST'}</span>
          {user && <Button onClick={signOutUser} variant="ghost">Sign out</Button>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Properties", "Rooms", "Bills"].map((label, idx) => (
          <motion.div key={label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * idx }} className="card">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{label}</h2>
              <Link className="underline text-sm" href={label === 'Properties' ? '/dashboard/owner' : '/dashboard/renter'}>Open</Link>
            </div>
            <p className="opacity-70 mt-2 text-sm">Realtime summary coming soon.</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
