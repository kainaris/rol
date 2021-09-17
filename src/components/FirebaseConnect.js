// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDpyzYQKJZIIFSxiMiEwIRhD6RG9PWKhlE",
//   authDomain: "role-2a806.firebaseapp.com",
//   databaseURL: "https://role-2a806-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "role-2a806",
//   storageBucket: "role-2a806.appspot.com",
//   messagingSenderId: "557149397568",
//   appId: "1:557149397568:web:0f03ef55f45adca529b5a5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// var database = firebase.database();

// export default app;



// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import { getDatabase, ref, set, onValue } from "firebase/database";

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyBEX5HLshjPq5Vf1HshGGexTzgqIUV22cw",
    authDomain: "role-2a806.firebaseapp.com",

    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    // databaseURL: "https://databaseName.firebaseio.com",
    databaseURL: "https://role-2a806-default-rtdb.europe-west1.firebasedatabase.app/",

    storageBucket: "role-2a806.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  // export default () => firebase.database();
  // export default firebase;
  //https://firebase.google.com/docs/reference/js/v8/firebase.database.Database
  //https://firebase.google.com/docs/database/web/structure-data


  
  
  export const writeUserData = (userId, name, email, imageUrl) => {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

  export const getUserData = (userId) => {
    const db = getDatabase();
    const starCountRef = ref(db, 'users/' + userId);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      // updateStarCount(postElement, data);
    });
  }