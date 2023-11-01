import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const cargarConfig=()=>{
    console.log("Carga configuracion firebase")
    const app = initializeApp(firebaseConfig);
    global.dbCon=getFirestore(app);

}

const firebaseConfig = {
  apiKey: "AIzaSyCyhHo-ECReQzFUUWsHEi9Gu8QzAXNJE_Q",
  authDomain: "fir-rn-4994f.firebaseapp.com",
  projectId: "fir-rn-4994f",
  storageBucket: "fir-rn-4994f.appspot.com",
  messagingSenderId: "414528938176",
  appId: "1:414528938176:web:eb0d8c5746a11ebcf48d25"
};
