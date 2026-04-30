import {Skeleton} from '@mui/material';

const JobCardSkeleton = () => (
  <>
    <Skeleton
      animation="wave"
      height={50}
      width="50%"
      style={{marginBottom: 6}}
    />
    <Skeleton
      animation="wave"
      height={20}
      width="20%"
      style={{marginBottom: 6}}
    />
    <Skeleton
      animation="wave"
      height={20}
      width="80%"
      style={{marginBottom: 6}}
    />
    <Skeleton
      animation="wave"
      height={20}
      width="80%"
      style={{marginBottom: 6}}
    />
    <Skeleton
      animation="wave"
      height={40}
      width="100%"
      style={{marginBottom: 5}}
    />
    <Skeleton
      className="mx-auto"
      animation="wave"
      height={25}
      width="10%"
    />
  </>
);

export default JobCardSkeleton;
