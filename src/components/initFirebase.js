import firebase from 'firebase/compat/app';
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBEX5HLshjPq5Vf1HshGGexTzgqIUV22cw",
  authDomain: "role-2a806.firebaseapp.com",
  databaseURL: "https://role-2a806-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "role-2a806",
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}

initFirebase();

export { firebase };