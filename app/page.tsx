import Link from 'next/link';
import { auth } from '@clerk/nextjs/server'; // Correct import path
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function HomePage() {
  const { userId } = await auth(); // Using auth() from server import
  
  
  

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold">Welcome</h1>
      
      <div className="mt-4 space-y-2">
        <SignedIn>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <UserButton afterSignOutUrl="/" />
              <Link href="/dashboard" className="text-blue-500 block">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </SignedIn>

        <SignedOut>
          <div className="space-y-2">
            <Link href="/sign-in" className="text-blue-500 block">
              Sign In
            </Link>
            <Link href="/sign-up" className="text-blue-500 block">
              Create Account
            </Link>
          </div>
        </SignedOut>
      </div>
    </main>
  );
}
