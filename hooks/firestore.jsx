import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import app from '../src/global';

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