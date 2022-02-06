import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC9YVC2xdFu4Fw2ZrBXeurfqhIhmD2H12s",
  authDomain: "linkedin-clone-85b81.firebaseapp.com",
  databaseURL: "https://linkedin-clone-85b81-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-85b81",
  storageBucket: "linkedin-clone-85b81.appspot.com",
  messagingSenderId: "36472616897",
  appId: "1:36472616897:web:489b4d127edd2e166d6140"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth} ;