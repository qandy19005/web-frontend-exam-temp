import PropTypes from 'prop-types';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Typography, Box,
} from '@mui/material';
import useJobDetail from '../hooks/useJobDetail';
import CompanyPhotoCarousel from './CompanyPhotoCarousel';
import JobDetailModalSkeleton from './JobDetailModalSkeleton';

const JobDetailModal = ({id, onClose}) => {
  const {data, loading, error} = useJobDetail(id);

  return (
    <Dialog open={Boolean(id)} onClose={onClose} maxWidth={false} fullWidth PaperProps={{sx: {maxWidth: 750}}}>
      <DialogTitle>
        <Typography className="text-gray-1000 font-bold text-2xl">詳細資料</Typography>
      </DialogTitle>

      <DialogContent dividers>
        {error && (
          <Typography color="error">載入失敗：{error}</Typography>
        )}

        {loading && <JobDetailModalSkeleton />}

        {!loading && !error && data && (
          <>
            <div className="flex items-center my-2">
              <Typography className="text-gray-1000 font-bold text-2xl mr-2">{data.companyName}</Typography>
              <Typography className="text-gray-1000 text-xl">{data.jobTitle}</Typography>
            </div>
            <div className="my-[10px]">
              <CompanyPhotoCarousel photos={data.companyPhoto} />
            </div>
            <Typography className="text-gray-1100 font-bold text-xl">
              工作內容
            </Typography>
            <Box className="px-2 mt-2 text-gray-800" dangerouslySetInnerHTML={{__html: data.description}} />
          </>
        )}
      </DialogContent>

      <DialogActions>
        <Button className="text-gray-1000" onClick={onClose}>關閉</Button>
      </DialogActions>
    </Dialog>
  );
};

JobDetailModal.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

JobDetailModal.defaultProps = {
  id: null,
};

export default JobDetailModal;
