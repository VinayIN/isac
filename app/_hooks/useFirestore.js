import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import app from '../_lib/init';

const db = getFirestore(app);

<<<<<<<< HEAD:app/_hooks/useFirestore.js
export const useFirestore = (collectionPath) => {
========
const useFirestore = (collectionPath) => {
>>>>>>>> 38ae60f (refactor nextjs 16):app/lib/firestore.jsx
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
