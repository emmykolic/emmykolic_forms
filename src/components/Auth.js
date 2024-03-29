// Auth.js
import React from 'react';
import { auth, googleProvider } from './firebase';

const Auth = () => {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Authentication</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Auth;