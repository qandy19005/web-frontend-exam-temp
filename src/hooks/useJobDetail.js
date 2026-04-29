import {useState, useEffect} from 'react';
import {getJobById} from '../services/api';

const useJobDetail = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getJobById(id);
        setData(res);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  return {data, loading, error};
};

export default useJobDetail;
