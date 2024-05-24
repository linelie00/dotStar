import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBIFmNrYD4ZZ_bvkp29_xXkR7as6hzVHOU',
  authDomain: 'dotstar-c1c09.firebaseapp.com',
  projectId: 'dotstar-c1c09',
  storageBucket: 'dotstar-c1c09.appspot.com',
  messagingSenderId: '656143277510',
  appId: '1:656143277510:web:5ac91a80e037df0d83e6c7',
  measurementId: 'G-1X5D9NXZ1E',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
