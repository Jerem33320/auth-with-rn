import firebase from 'firebase';
// Optionally import the services that you want to use
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SERVER_ID,
  appId: process.env.APP_ID
});

export const auth = app.auth();
export default app;