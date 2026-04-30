import {useState, useEffect} from 'react';
import {getJobs, getEducationLevelList, getSalaryLevelList} from '../services/api';

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
        const [res, educationLevelList, salaryLevelList] = await Promise.all([
          getJobs({companyName, educationLevel, salaryLevel, page, prePage}),
          getEducationLevelList(),
          getSalaryLevelList(),
        ]);

        setData(res.data.map((job) => ({
          ...job,
          educationLabel: educationLevelList.find((e) => `${e.id}` === `${job.educationId}`)?.label ?? '',
          salaryLabel: salaryLevelList.find((s) => `${s.id}` === `${job.salaryId}`)?.label ?? '',
        })));
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
