// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { getFirestore } from 'firebase/firestore';
import {
       getFirestore,
       collection,
       addDoc,
       serverTimestamp,
       onSnapshot,
       query,
       orderBy,
   } from 'firebase/firestore';
   
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTJZMhWf1qNvx5Or_3EeA8m4EoRnTD_tE",
  authDomain: "chatapp-ccdf7.firebaseapp.com",
  projectId: "chatapp-ccdf7",
  storageBucket: "chatapp-ccdf7.appspot.com",
  messagingSenderId: "293731768613",
  appId: "1:293731768613:web:0acc51931d73010ed622cc",
  measurementId: "G-63DXT5C555"
};
function getMessages(roomId, callback) {
       return onSnapshot(
           query(
               collection(db, 'chat-rooms', roomId, 'messages'),
               orderBy('timestamp', 'asc')
           ),
           (querySnapshot) => {
               const messages = querySnapshot.docs.map((doc) => ({
                   id: doc.id,
                   ...doc.data(),
               }));
               callback(messages);
           }
       );
   }
   

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db=getFirestore(app);
export {getMessages};