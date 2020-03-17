import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC5mytj7Tb091AKeuRGx8zomb683XL9HsM",
  authDomain: "react-test-app-55dde.firebaseapp.com",
  databaseURL: "https://react-test-app-55dde.firebaseio.com",
  projectId: "react-test-app-55dde",
  storageBucket: "react-test-app-55dde.appspot.com",
  messagingSenderId: "317942131230",
  appId: "1:317942131230:web:9f0764bb5f6dc26bfe9c0f",
  measurementId: "G-G3ZXNE1NJM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const {displayName, email, logoUrl} = userAuth;
    const createdAt = new Date();
    try{
      const createUser = await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err){
      console.log('error creating user', err.message)
    };
  
  }
  console.log(snapShot);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
