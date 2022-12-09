


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth
} from "firebase/auth";

import { getDatabase, ref } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCgP20eazWnhc2lbhkou4LvsgssNoOCsI",
  authDomain: "chats041222.firebaseapp.com",
  projectId: "chats041222",
  storageBucket: "chats041222.appspot.com",
  messagingSenderId: "369809088585",
  appId: "1:369809088585:web:d4e86693c1723f4d589f98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

//СОЗДАТЬ НОВОГО ПОЛЬЗОВАТЕЛЯ
export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
}

//ВХОД В АККАУНТ
export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
}

export const logOut = async () => {
  await signOut(auth);
}

export const usersRef = ref(db, 'users'); 
// реф-функция from 'firebase/database' (самаБД, 'конкретный интересующий участок с данными - строка')




export const getUserRefById = (id) => ref(db, `users/${id}`); // ссылка на коокретный раздел в user в firebase


export const userEmailRef = ref(db, 'user/email'); 

export const userVisibleRef = (id) => ref(db, `users/${id}/visible`);

export const relationsRef = ref(db, 'relations');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');

export const getChatRefById = (id) => ref(db, `chats/${id}`);

export const getMsgsRefById = (id) => ref(db, `messages/${id}`);

export const getRelationRefById = (slug) => ref(db, `relations/${slug}`);

export const getMsgsListRefById = (id) => ref(db, `messages/${id}/messagesList`);

export const getUserNameRefById = () => ref(db, `users/${auth.currentUser.uid}/name`);
