import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCLcwIYg1EInWSxQwnIg5BfGLwHhw5EuOQ',
  authDomain: 'crwn-db-8ac8c.firebaseapp.com',
  projectId: 'crwn-db-8ac8c',
  storageBucket: 'crwn-db-8ac8c.appspot.com',
  messagingSenderId: '498020102558',
  appId: '1:498020102558:web:2416e74ca52a4090b1268f',
  measurementId: 'G-RYPK6P2HLP',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
