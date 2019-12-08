import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWoker from './serviceWorker'
const firebase = require("firebase");
require('firebase/firestore');

// Initialize Firebase
firebase.initializeApp(
  {
    apiKey: "AIzaSyCZDhjeJCMBEixqIQvTgCYCpXdlTo0Tah0",
    authDomain: "reddit-clone-surreal.firebaseapp.com",
    databaseURL: "https://reddit-clone-surreal.firebaseio.com",
    projectId: "reddit-clone-surreal",
    storageBucket: "reddit-clone-surreal.appspot.com",
    messagingSenderId: "1003600973330",
    appId: "1:1003600973330:web:147907310fce1be35512cb",
    measurementId: "G-278RTW9NNZ"
  }
);

ReactDOM.render(<App />,document.getElementById('root')); 
serviceWoker.unregister();