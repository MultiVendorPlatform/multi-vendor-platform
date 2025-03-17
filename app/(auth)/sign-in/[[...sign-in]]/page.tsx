import { SignIn } from "@clerk/nextjs";
import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn 
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-500 hover:bg-blue-600",
            footerActionLink: "text-blue-500 hover:text-blue-600"
          }
        }}
      />
    </div>
  );
}