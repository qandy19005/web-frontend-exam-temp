import {useState, useEffect} from 'react';
import {getJobs} from '../services/api';

const useJobs = (
    {companyName, educationLevel, salaryLevel, page, prePage} = {},
) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getJobs(
            {companyName, educationLevel, salaryLevel, page, prePage},
        );
        setData(res.data);
        setTotal(res.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [companyName, educationLevel, salaryLevel, page, prePage]);

  return {data, total, loading, error};
};

export default useJobs;
