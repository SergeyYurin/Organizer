import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyD7gWThR9-v9j-rckmpg4oYefHx3Gu5AoI',
  authDomain: 'organizer-6c3ce.firebaseapp.com',
  projectId: 'organizer-6c3ce',
  storageBucket: 'organizer-6c3ce.appspot.com',
  messagingSenderId: '6988448121',
  appId: '1:6988448121:web:c8aa2c0f95c1cd22052fa8',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
