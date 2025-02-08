"use client";
import { UserButton } from "@clerk/clerk-react";

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Welcome to Your Profile</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
