import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyDl_EtIBuTMNLdvTbDPzJrNcLk4-Y9YfWA",

  authDomain: "notenest-e5bca.firebaseapp.com",

  projectId: "notenest-e5bca",

  storageBucket: "notenest-e5bca.firebasestorage.app",

  messagingSenderId: "1039905219441",

  appId: "1:1039905219441:web:85661afa57467a7b028cd0",

  measurementId: "G-NW5WV8NRN5"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
