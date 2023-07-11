import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoZHIUzzsqGHPNNwgTdSp3IuLbbfh1W8E",
  authDomain: "quran-31e5d.firebaseapp.com",
  projectId: "quran-31e5d",
  storageBucket: "quran-31e5d.appspot.com",
  messagingSenderId: "130479598157",
  appId: "1:130479598157:web:64cf253ea9e22e55898a04"
};

const app = initializeApp(firebaseConfig);

export const firestore = initializeFirestore(app, {
  experimentalForceLongPolling: true
})
