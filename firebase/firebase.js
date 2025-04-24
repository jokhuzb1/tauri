import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1whqPstzhaw87WZVwELnKkSa5JbHgqVU",
  authDomain: "caritn-d9d97.firebaseapp.com",
  databaseURL:
    "https://caritn-d9d97-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "caritn-d9d97",
  storageBucket: "caritn-d9d97.appspot.com",
  messagingSenderId: "125187662667",
  appId: "1:125187662667:web:7a52310fa8715734ccfece",
  measurementId: "G-KJ9V1G7BKQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

enableIndexedDbPersistence(db)
  .then(() => {
    console.log("✅ Offline persistence enabled");
  })
  .catch((err) => {
    if (err.code === "failed-precondition") {
      console.warn("⚠️ Only one tab at a time can have persistence enabled.");
    } else if (err.code === "unimplemented") {
      console.warn("⚠️ Offline persistence isn't supported in this browser.");
    } else {
      console.error("❌ Offline persistence error:", err);
    }
  });

export { db, auth, app };
