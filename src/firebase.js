import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpuuneJSWHEpiwpWurMnFwhMkyhahsBxo",
  authDomain: "blog-df5d5.firebaseapp.com",
  projectId: "blog-df5d5",
  storageBucket: "blog-df5d5.appspot.com",
  messagingSenderId: "361568174833",
  appId: "1:361568174833:web:53c27d7feceef622845f50",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
