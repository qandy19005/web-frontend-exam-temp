import {useState, useEffect} from 'react';
import {getEducationLevelList, getSalaryLevelList} from '../services/api';

const useFilterOptions = () => {
  const [educationList, setEducationList] = useState([]);
  const [salaryList, setSalaryList] = useState([]);

  useEffect(() => {
    getEducationLevelList().then(setEducationList);
    getSalaryLevelList().then(setSalaryList);
  }, []);

  return {educationList, salaryList};
};

export default useFilterOptions;
