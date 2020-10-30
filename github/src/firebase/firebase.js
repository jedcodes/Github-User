import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4MHCN8K168tvr-jptDQVsmKy-3NgkUh0",
  authDomain: "github-6809b.firebaseapp.com",
  databaseURL: "https://github-6809b.firebaseio.com",
  projectId: "github-6809b",
  storageBucket: "github-6809b.appspot.com",
  messagingSenderId: "887299133394",
  appId: "1:887299133394:web:8bf1d58de3591a4637c20b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
