import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD2dSTcxw2xwvJtWmstT-tDAm12D1DhT68",
    authDomain: "login-2d5f5.firebaseapp.com",
    projectId: "login-2d5f5",
    storageBucket: "login-2d5f5.appspot.com",
    messagingSenderId: "1043045879044",
    appId: "1:1043045879044:web:1e92d3f42480bd82cd5451",
    measurementId: "G-RTF8496PQX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Listen for changes to the user's authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, do something
  } else {
    // User is signed out, do something else
  }
});

export { auth };
