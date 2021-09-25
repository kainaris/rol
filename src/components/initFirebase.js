import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  // apiKey: "AIzaSyBEX5HLshjPq5Vf1HshGGexTzgqIUV22cw",
  apiKey: "AIzaSyDpyzYQKJZIIFSxiMiEwIRhD6RG9PWKhlE",
  authDomain: "role-2a806.firebaseapp.com",
  databaseURL: "https://role-2a806-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "role-2a806",
};

// function initFirebase() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
    console.log("dababase has been initialized now");
  } else {
    console.log("I guess database was already initialized");
  }
// }

// initFirebase();





// firebase.auth().signInAnonymously().catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
//   console.log("auth error --- " + errorCode + " | " + errorMessage);
// });
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     const app = firebase.app();
//     // User is signed in.
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     var userRef = app.dataInfo.child(app.users);
    
//     var useridRef = userRef.child(app.userid);
    
//     useridRef.set({
//       locations: "",
//       theme: "",
//       colorScheme: "",
//       food: ""
//     });

//     console.log("user logged in i think --- anon:" + isAnonymous + " | uid:" + uid + " | ref:" + userRef);

//   } else {
//     console.log("no user logged in");
//     // User is signed out.
//     // ...
//   }
//   // ...
// });




















export { firebase };