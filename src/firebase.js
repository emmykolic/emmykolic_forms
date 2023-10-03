// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
export default firebaseApp;