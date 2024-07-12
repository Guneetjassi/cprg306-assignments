'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // use 'next/navigation' for Next.js 13+
import { useUserAuth } from './_utils/auth-context'; // Adjust the path if necessary

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/week-8'); // Redirect to the login page if not logged in
    }
  }, [user, router]);

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  };

  if (!user) {
    return (
      <div>
        <button onClick={handleSignIn}>Sign In with GitHub</button>
      </div>
    );
  }

  return (
    <div>
      <p>
        Welcome,
         {user.displayName} ({user.email})
      </p>
      <button onClick={handleSignOut}>Log Out</button>
      <p>
      <a href="/week-8/shopping-list">Go to Shopping List</a>
      </p>
    </div>
  );
};

export default Page;
