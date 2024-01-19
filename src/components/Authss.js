// src/components/Auth.js
import React from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Auth = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );

  // return (
  //   <div>
  //     {user ? (
  //       <div>
  //         <p>Welcome, {user.displayName}</p>
  //         <button onClick={handleSignOut}>Sign Out</button>
  //       </div>
  //     ) : (
  //       <button onClick={handleSignIn}>Sign In with Google</button>
  //     )}
  //   </div>
  // );
};

export default Auth;