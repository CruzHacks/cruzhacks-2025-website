import { initializeApp } from "firebase/app"
import { getFirestore, connectFirestoreEmulator } from "@firebase/firestore"
import { getAuth, connectAuthEmulator } from "@firebase/auth"
import { getFunctions, connectFunctionsEmulator } from "@firebase/functions"
import { getDatabase, connectDatabaseEmulator} from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseUrl: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const funcs = getFunctions(app)
const rtdb = getDatabase(app)

// Start emulators only in development
if (import.meta.env.DEV) {
  connectAuthEmulator(auth, "http://localhost:9099")
  connectFirestoreEmulator(db, "localhost", 8080)
  connectFunctionsEmulator(funcs, "localhost", 5001)
  connectDatabaseEmulator(rtdb, "localhost", 9000)

}

export { auth, db, funcs, rtdb }
export default app
