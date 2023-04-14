// import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import {getDatabase} from 'firebase/database';
// import { getAnalytics } from "firebase/analytics";

// // Optionally import the services that you want to use
// // import {...} from "firebase/auth";
// // import {...} from "firebase/database";
// // import {...} from "firebase/firestore";
// // import {...} from "firebase/functions";
// // import {...} from "firebase/storage";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyD4p41WTIkyfcNMGb6L7I94e_A3Qh6SG24",
//   authDomain: "foodrecipeapp-383612.firebaseapp.com",
//   projectId: "foodrecipeapp-383612",
//   storageBucket: "foodrecipeapp-383612.appspot.com",
//   messagingSenderId: "1015584010597",
//   appId: "1:1015584010597:web:1c4de4eeb412e163cf718c",
//   measurementId: "G-6V1DVSBTTX"
// };

// if (firebase.apps.length === 0 ) {
//   firebase.initializeApp(firebaseConfig);
// }

// const analytics = getAnalytics(app);


// const db = getDatabase();

// const app = initializeApp(firebaseConfig);
// // For more information on how to access Firebase in your project,
// // see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// export { db }

import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  databaseURL: "https://foodrecipeapp-383612-default-rtdb.europe-west1.firebasedatabase.app",
  apiKey: "AIzaSyD4p41WTIkyfcNMGb6L7I94e_A3Qh6SG24",
  authDomain: "foodrecipeapp-383612.firebaseapp.com",
  projectId: "foodrecipeapp-383612",
  storageBucket: "foodrecipeapp-383612.appspot.com",
  messagingSenderId: "1015584010597",
  appId: "1:1015584010597:web:1c4de4eeb412e163cf718c",
  measurementId: "G-6V1DVSBTTX"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);

export { db };


