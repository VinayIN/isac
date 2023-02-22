import 'primereact/resources/themes/soho-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../styles/global.css';
import Layout from '../components/layout'
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuSqEK8cC6zg1ho55ULnt7hMQLnR7EbWk",
  authDomain: "isac-btu.firebaseapp.com",
  projectId: "isac-btu",
  storageBucket: "isac-btu.appspot.com",
  messagingSenderId: "854015997641",
  appId: "1:854015997641:web:aee5ba4d68e8c9ce817f18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}