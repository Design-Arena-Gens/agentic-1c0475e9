"use client";
import { useAuthUser, requireRole } from '@/src/lib/auth';
import { Button } from '@/src/components/ui/Button';
import { useEffect } from 'react';

export default function OwnerDashboard() {
  requireRole('owner');
  const { user } = useAuthUser();

  useEffect(() => {}, []);
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Owner</h1>
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-medium">Properties</h2>
            <p className="opacity-70 text-sm">Manage properties and rooms.</p>
          </div>
          <Button variant="primary">Add Property</Button>
        </div>
      </div>
    </div>
  );
}
