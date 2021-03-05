import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCTw5B5p0PZP5HAYsUulH-ts7VeTF3ByOc",
  authDomain: "hh-challenge.firebaseapp.com",
  projectId: "hh-challenge",
  storageBucket: "hh-challenge.appspot.com",
  messagingSenderId: "792308958562",
  appId: "1:792308958562:web:3d5007f4e2432e290e983b",
  measurementId: "G-BW5BBXMQQG",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
