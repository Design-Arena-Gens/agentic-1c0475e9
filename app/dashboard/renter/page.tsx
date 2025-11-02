"use client";
import { useAuthUser, requireRole } from '@/src/lib/auth';

export default function RenterDashboard() {
  requireRole('renter');
  const { user } = useAuthUser();

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Renter</h1>
      <div className="card">
        <h2 className="font-medium">Upcoming Bills</h2>
        <p className="opacity-70 text-sm">Nothing due. Enjoy your day!</p>
      </div>
    </div>
  );
}
