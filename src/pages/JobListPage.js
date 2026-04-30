import {useState} from 'react';
import {
  Box, Fade, Grid, Pagination, Typography, PaginationItem, useMediaQuery,
} from '@mui/material';
import FilterBar from '../components/FilterBar';
import JobCard from '../components/JobCard';
import JobCardSkeleton from '../components/JobCardSkeleton';
import JobDetailModal from '../components/JobDetailModal';
import BackgroundAnimation from '../components/BackgroundAnimation';
import useJobs from '../hooks/useJobs';
import useFilterOptions from '../hooks/useFilterOptions';

const JobListPage = () => {
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);

  const isMobile = useMediaQuery('(max-width:599px)');
  const PRE_PAGE = isMobile ? 4 : 6;

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
    <Box className="pb-7" sx={{width: '100%', minHeight: '100vh', background: 'linear-gradient(to right, #868686, #5C5C5C)'}}>
      <BackgroundAnimation />
      <div className="sm:mx-7 relative">
        <Box className="border border-gray-500 sm:rounded-xl sm:p-6 p-4 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] bg-white">
          <Box display="flex" alignItems="center" className="sm:mb-5 mb-3">
            <Box className="w-1 h-4 rounded-sm bg-orange-700 mr-3" />
            <Typography className="font-bold text-gray-1000" variant="h6">適合前端工程師的好工作</Typography>
          </Box>

          <Box className="mb-5 hidden sm:block">
            <FilterBar
              educationList={educationList}
              salaryList={salaryList}
              onSearch={handleSearch}
            />
          </Box>

          {error && (
            <Typography color="error">載入失敗：{error}</Typography>
          )}

          {loading && (
            <>
              <Grid container spacing={2.25}>
                {
                  Array.from({length: PRE_PAGE}).map((_, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      <div className="py-1">
                        <JobCardSkeleton />
                      </div>
                    </Grid>
                  ))
                }
              </Grid>
            </>
          )}

          {!loading && !error && (
            <Fade in timeout={400}>
              <div>
                {(data.length === 0) &&(
                  <div className="my-3 flex items-center justify-center w-full h-[458px] border border-gray-500 rounded-md text-gray-700">
                無資料
                  </div>
                )}
                <Grid container spacing={{xs: 1.25, sm: 2.25}}>
                  {data.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job.id}>
                      <JobCard
                        job={job} isLoading={loading} onClick={setSelectedId}
                      />
                    </Grid>
                  ))}
                </Grid>

              </div>
            </Fade>
          )}

          {totalPages > 1 && (
            <Box display="flex" justifyContent="center" className="mt-3">
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

          <JobDetailModal
            id={selectedId}
            onClose={() => setSelectedId(null)}
          />
        </Box>
      </div>
    </Box>
  );
};


export default JobListPage;
