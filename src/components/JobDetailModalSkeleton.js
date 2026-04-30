import {Skeleton, Box} from '@mui/material';

const JobDetailModalSkeleton = () => (
  <>
    {/* companyName + jobTitle */}
    <Box display="flex" alignItems="center" my={1} gap={1}>
      <Skeleton animation="wave" height={40} width="40%" />
      <Skeleton animation="wave" height={32} width="30%" />
    </Box>

    {/* CompanyPhotoCarousel */}
    <Skeleton animation="wave" variant="rectangular" height={235} width="100%" style={{marginBottom: 20}} />

    {/* 工作內容 label */}
    <Skeleton animation="wave" height={50} width="20%" style={{marginBottom: 10}} />

    {/* description lines */}
    <Skeleton animation="wave" height={40} width="100%" style={{marginBottom: 6}} />
    <Skeleton animation="wave" height={40} width="100%" style={{marginBottom: 6}} />
    <Skeleton animation="wave" height={40} width="90%" style={{marginBottom: 6}} />
    <Skeleton animation="wave" height={40} width="95%" style={{marginBottom: 6}} />
    <Skeleton animation="wave" height={40} width="80%" />
  </>
);

export default JobDetailModalSkeleton;
