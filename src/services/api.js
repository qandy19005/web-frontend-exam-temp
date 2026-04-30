const BASE_URL = '/api/v1';

const get = async (path) => {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
};

export const getJobs = ({
  companyName, educationLevel, salaryLevel, page, prePage,
} = {}) => {
  const params = new URLSearchParams();
  if (companyName) params.set('company_name', companyName);
  if (educationLevel) params.set('education_level', educationLevel);
  if (salaryLevel) params.set('salary_level', salaryLevel);
  if (page) params.set('page', page);
  if (prePage) params.set('pre_page', prePage);

  const query = params.toString();
  return get(`/jobs${query ? `?${query}` : ''}`);
};

export const getJobById = (id) => get(`/jobs/${id}`);

export const getEducationLevelList = () => get('/educationLevelList');

export const getSalaryLevelList = () => get('/salaryLevelList');
