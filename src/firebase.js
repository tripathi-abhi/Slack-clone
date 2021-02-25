import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDt3ob2vcvUeMnn_7PCiGLeNXNSGAneBys",
  authDomain: "slack-clone-8a83c.firebaseapp.com",
  projectId: "slack-clone-8a83c",
  storageBucket: "slack-clone-8a83c.appspot.com",
  messagingSenderId: "1039128580088",
  appId: "1:1039128580088:web:85817e0f33afa007f5100d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;