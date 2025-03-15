import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCJjZOKA6zzo4uVoGLA9YFO1GpZ_2ouyjw",
  authDomain: "react-web-app-ecommerce.firebaseapp.com",
  projectId: "react-web-app-ecommerce",
  storageBucket: "react-web-app-ecommerce.firebasestorage.app",
  messagingSenderId: "387462580164",
  appId: "1:387462580164:web:bdf16d6c6c5aa910444691"
}

export const app = initializeApp(firebaseConfig)
