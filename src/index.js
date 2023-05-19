import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/compat/app';
import App from './App';

//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  //  web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDbCCI6SnHe-K8-VnZYM0dIUMrl0nTxwu4",
    authDomain: "cart-1291b.firebaseapp.com",
    projectId: "cart-1291b",
    storageBucket: "cart-1291b.appspot.com",
    messagingSenderId: "767004230083",
    appId: "1:767004230083:web:c1052324ee4444a482fd76"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.unregister();
