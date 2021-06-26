import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// uncomment once
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBls2UkYk12LG_H7oWXiN0fbUxjMIcrONA',
  authDomain: 'netflix-2280f.firebaseapp.com',
  projectId: 'netflix-2280f',
  storageBucket: 'netflix-2280f.appspot.com',
  messagingSenderId: '954888887626',
  appId: '1:954888887626:web:7baebc1dd2e4ddb0c9b5b3',
};

const firebase = Firebase.initializeApp(config);

// uncomment once
// seedDatabase(firebase);

export { firebase };
