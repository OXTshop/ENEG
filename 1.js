  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBUgz8UXm3C3ETf63T8c5xWMf9-4SgsVIc",
    authDomain: "energy-tcc.firebaseapp.com",
    databaseURL: "https://energy-tcc-default-rtdb.firebaseio.com",
    projectId: "energy-tcc",
    storageBucket: "energy-tcc.appspot.com",
    messagingSenderId: "38598782344",
    appId: "1:38598782344:web:b3197db7a677dcf0375e3d",
    measurementId: "G-RQHZETFYLT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);