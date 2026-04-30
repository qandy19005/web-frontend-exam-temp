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
    <Dialog open={Boolean(id)} onClose={onClose} maxWidth={false} fullWidth PaperProps={{sx: {maxWidth: {xs: 'calc(100% - 44px)', sm: 750}, margin: {xs: '22px', sm: '32px'}}}}>
      <DialogTitle className="sm:px-6 px-4">
        <Typography className="text-gray-1000 font-bold sm:text-2xl text-xl">詳細資料</Typography>
      </DialogTitle>

      <DialogContent dividers className="sm:py-5 sm:px-6 p-4">
        {error && (
          <Typography color="error">載入失敗：{error}</Typography>
        )}

        {loading && <JobDetailModalSkeleton />}

        {!loading && !error && data && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <Typography className="text-gray-1000 font-bold sm:text-2xl text-xl sm:mr-2">{data.companyName}</Typography>
              <Typography className="text-gray-1000 sm:text-xl text-sm">{data.jobTitle}</Typography>
            </div>
            <div className="sm:my-[18px] my-3">
              <CompanyPhotoCarousel photos={data.companyPhoto} />
            </div>
            <Typography className="text-gray-1100 font-bold sm:text-xl -mt-4">
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
