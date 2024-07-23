import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: process.env.react_firebase_apiKey,
  authDomain: process.env.react_firebase_authDomain,
  projectId: process.env.react_firebase_projectId,
  storageBucket: process.env.react_firebase_storageBucket,
  messagingSenderId: process.env.react_firebase_messagingSenderId,
  appId: process.env.react_firebase_appId
})

export const auth= app.auth;
export default app;