// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6fGyeN3Ms9tfjdy5Izves6tvBA9suypE",
  authDomain: "chat-clone-5af5c.firebaseapp.com",
  projectId: "chat-clone-5af5c",
  storageBucket: "chat-clone-5af5c.appspot.com",
  messagingSenderId: "715876580899",
  appId: "1:715876580899:web:ad1577eebf98c0641f3b96",
  measurementId: "G-XLBJCFPX8J"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp