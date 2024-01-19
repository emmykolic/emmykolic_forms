// Auth.js
import React from 'react';
import { auth, googleProvider } from './firebase';
import { useHistory } from 'react-router-dom';

const Auth = () => {
  const history = useHistory();

  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      history.push('/index');
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