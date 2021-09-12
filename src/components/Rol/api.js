// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpyzYQKJZIIFSxiMiEwIRhD6RG9PWKhlE",
  authDomain: "role-2a806.firebaseapp.com",
  projectId: "role-2a806",
  storageBucket: "role-2a806.appspot.com",
  messagingSenderId: "557149397568",
  appId: "1:557149397568:web:0f03ef55f45adca529b5a5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

// Set a list of cities from your database
export async function setCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);