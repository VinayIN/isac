import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';

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
const db = getFirestore(app);

const useFirestore = (collectionPath) => {
  const db = getFirestore(app);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, collectionPath));
        const snapshot = await getDocs(q);
        const documents = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setData(documents);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionPath]);

  return { data, loading, error };
}

export { useFirestore };