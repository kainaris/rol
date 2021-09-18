import firebase from 'firebase/compat/app';
import {getDatabase, ref, set, onValue} from "firebase/database";

var config = {
  apiKey: "AIzaSyBEX5HLshjPq5Vf1HshGGexTzgqIUV22cw",
  // authDomain: "role-2a806.firebaseapp.com",
  // databaseURL: "https://role-2a806-default-rtdb.europe-west1.firebasedatabase.app/",
  // storageBucket: "role-2a806.appspot.com",


  
  // apiKey: "AIzaSyDpyzYQKJZIIFSxiMiEwIRhD6RG9PWKhlE",
  authDomain: "role-2a806.firebaseapp.com",
  databaseURL: "https://role-2a806-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "role-2a806",
  storageBucket: "role-2a806.appspot.com",
  messagingSenderId: "557149397568",
  appId: "1:557149397568:web:0f03ef55f45adca529b5a5"
};

firebase.initializeApp(config);

// https://firebase.google.com/docs/reference/js/v8/firebase.database.Database
// https://firebase.google.com/docs/database/web/structure-data

export const writeUserData = (userId, name, email, imageUrl) => {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl
  });
  console.log("writeUserData");
}

export function onUserChange () {}

// export const getUserData = (userId/*, doSomething*/) => {
//   const db = getDatabase();
//   console.log("db = " + db);
//   const starCountRef = ref(db, 'users/' + userId);
//   onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     // console.log("getUserData _> onValue _> " + data.username);
//     console.log(data);
//     // // updateStarCount(postElement, data);
//     return data;

//     // I want to change what's inside this function from Rol.js
//     // doSomething(data);
//   });
// }

// export const onUserChanged = (userId) => {
//   const db = getDatabase();
//   const starCountRef = ref(db, 'users/' + userId);
//   return onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     // console.log("getUserData _> onValue _> " + data.username);
//     // console.log(data);
//     // // updateStarCount(postElement, data);
//     return data;
//   });
// }


const db = getDatabase();
const starCountRef = ref(db, 'users/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  users = data;
});

export var users;