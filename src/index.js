// Index.js
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        // If user is not logged in, navigate to the authentication page
        navigate('/auth');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <p>Email: {user.email}</p>
          <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
      ) : (
        // If user is not logged in, you can render a login/signup button here
        <div>
          <h1>Please sign in or sign up</h1>
          <button onClick={() => navigate('/auth')}>Sign In / Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default Index;
