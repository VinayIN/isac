import 'primereact/resources/themes/lara-light-blue/theme.css'; // theme
import 'primereact/resources/primereact.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css';
import '../styles/global.css';
import '../src/global.js';
import Layout from '../components/layout';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyATpKRmiqtSghIvTSIxCnSd0biQSt0eqXo",
  authDomain: "isacottbus-btu.firebaseapp.com",
  projectId: "isacottbus-btu",
  storageBucket: "isacottbus-btu.appspot.com",
  messagingSenderId: "1081716638611",
  appId: "1:1081716638611:web:904ed1d79e4db7ccde9e66",
  measurementId: "G-Z0J3NZR5WK"
};

const app = initializeApp(firebaseConfig);

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}