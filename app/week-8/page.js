'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { useUserAuth } from './_utils/auth-context'; 

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/week-8'); 
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
