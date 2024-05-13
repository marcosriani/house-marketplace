// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5wmOik1UXeTUiZPkQVBvQChFY8NO9fDE',
  authDomain: 'house-marketplace-app-a4cf1.firebaseapp.com',
  projectId: 'house-marketplace-app-a4cf1',
  storageBucket: 'house-marketplace-app-a4cf1.appspot.com',
  messagingSenderId: '534891964468',
  appId: '1:534891964468:web:be6f5b61d11cb032480261',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
