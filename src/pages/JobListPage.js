import {useState} from 'react';
import {
  Box, Grid, Pagination, Typography, CircularProgress, PaginationItem,
} from '@mui/material';
import FilterBar from '../components/FilterBar';
import JobCard from '../components/JobCard';
import JobDetailModal from '../components/JobDetailModal';
import useJobs from '../hooks/useJobs';
import useFilterOptions from '../hooks/useFilterOptions';

const PRE_PAGE = 6;

const JobListPage = () => {
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);

  const {educationList, salaryList} = useFilterOptions();
  const {data, total, loading, error} = useJobs(
      {...filters, page, prePage: PRE_PAGE},
  );
  const totalPages = Math.ceil(total / PRE_PAGE);

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <Box className="border border-gray-500 rounded-xl p-6 m-5 shadow-[2px_2px_4px_rgba(0,0,0,0.25)]">
      <Box display="flex" alignItems="center" mb={2}>
        <Box className="w-1 h-4 rounded-sm bg-orange-700 mr-3" />
        <Typography className="font-bold text-gray-1000" variant="h6">適合前端工程師的好工作</Typography>
      </Box>

      <Box mb={3}>
        <FilterBar
          educationList={educationList}
          salaryList={salaryList}
          onSearch={handleSearch}
        />
      </Box>

      {loading && (
        <Box display="flex" justifyContent="center" py={6}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error">載入失敗：{error}</Typography>
      )}

      {!loading && !error && (
        <>
          {data.length === 0 &&(
            <div className="my-3 flex items-center justify-center w-full h-[458px] border border-gray-500 rounded-md text-gray-700">
              無資料
            </div>
          )}
          <Grid container spacing={2}>
            {data.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <JobCard job={job} onClick={setSelectedId} />
              </Grid>
            ))}
          </Grid>

          {totalPages > 1 && (
            <Box display="flex" justifyContent="center" mt={4}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                renderItem={(item) => (
                  <PaginationItem
                    {...item}
                    className={item.selected ? '!bg-gray-300' : ''}
                  />
                )}
              />
            </Box>
          )}
        </>
      )}

      <JobDetailModal
        id={selectedId}
        onClose={() => setSelectedId(null)}
      />
    </Box>
  );
};


export default JobListPage;
