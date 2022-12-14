import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTq27uVfNAuQ94g70ruePC7HfQGiSaPv0",
  authDomain: "proyect-react-5aeaa.firebaseapp.com",
  projectId: "proyect-react-5aeaa",
  storageBucket: "proyect-react-5aeaa.appspot.com",
  messagingSenderId: "236425357952",
  appId: "1:236425357952:web:9c09631d05dc78a832d465"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
