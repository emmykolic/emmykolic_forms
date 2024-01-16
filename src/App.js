// import logo from './logo.svg';
// // src/App.js

import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import Auth from './components/Auth'; // Import the Auth component

const firebaseConfig = {
  apiKey: 'AIzaSyC78SNLjEj-4kK9h8-a3d9uAaUSnyl0H4I',
  authDomain: 'emmykolic.firebaseapp.com',
  databaseURL: "https://emmykolic-default-rtdb.firebaseio.com",
  projectId: 'emmykolic',
  storageBucket: 'emmykolic.appspot.com',
  messagingSenderId: '722324935442',
  appId: '1:722324935442:web:e4daf53aa87fd0a92b59cb',
  measurementId: "G-XD0ZEN4E8F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        // Handle the popup-closed-by-user error
        // Inform the user or take appropriate action
        console.error('Popup closed by the user');
      } else {
        // Handle other authentication errors
        console.error(error);
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign In with Google</button>
      )}
      
      <Auth /> {/* Render the Auth component here if needed */}
    </div>
  );
};

  // const App = () => {
  //   const [user, setUser] = useState(null);

  //   // Function to handle sign-in
  //   const handleSignIn = async () => {
  //     try {
  //       const provider = new firebase.auth.GoogleAuthProvider();
  //       await firebase.auth().signInWithPopup(provider);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   // Function to handle sign-out
  //   const handleSignOut = async () => {
  //     try {
  //       await firebase.auth().signOut();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   // useEffect to listen for authentication changes
  //   useEffect(() => {
  //     const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
  //       if (authUser) {
  //         // User is signed in
  //         setUser(authUser);
  //       } else {
  //         // User is signed out
  //         setUser(null);
  //       }
  //     });

  //     // Clean up the subscription
  //     return () => unsubscribe();
  //   }, []);

  //   return (
  //     <div>
  //       {user ? (
  //         <div>
  //           <p>Welcome, {user.displayName}</p>
  //           <button onClick={handleSignOut}>Sign Out</button>
  //         </div>
  //       ) : (
  //         <button onClick={handleSignIn}>Sign In with Google</button>
  //       )}
  //     </div>
  //   );
  // };


//In this example, when the user signs in, their name is displayed along with a "Sign Out" button. When they sign out, the "Sign In" button is displayed again.

// Make sure to configure Firebase properly in your project and replace the authentication methods with your preferred authentication provider if you're not using Google sign-in.


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header navbar navbar-expand-lg navbar-light bg-light">
//         <div class="container-fluid">
//           <h3>React Firebase Authentication</h3>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
//             </ul>
//             <Auth />
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

export default App; 