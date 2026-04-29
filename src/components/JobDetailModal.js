import PropTypes from 'prop-types';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Typography, CircularProgress, Divider, Box,
} from '@mui/material';
import useJobDetail from '../hooks/useJobDetail';

const JobDetailModal = ({id, onClose}) => {
  const {data, loading, error} = useJobDetail(id);

  return (
    <Dialog open={Boolean(id)} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {data ? data.jobTitle : ' '}
      </DialogTitle>

      <DialogContent dividers>
        {loading && (
          <Box display="flex" justifyContent="center" py={6}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Typography color="error">載入失敗：{error}</Typography>
        )}

        {!loading && !error && data && (
          <>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {data.companyName}
            </Typography>
            <Divider sx={{my: 2}} />
            <Box dangerouslySetInnerHTML={{__html: data.description}} />
          </>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>關閉</Button>
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
