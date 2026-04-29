import PropTypes from 'prop-types';
import {Card, CardContent, CardActionArea, Typography} from '@mui/material';

const JobCard = ({job, onClick}) => (
  <Card variant="outlined">
    <CardActionArea onClick={() => onClick(job.id)}>
      <CardContent>
        <Typography variant="h6" noWrap>{job.jobTitle}</Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {job.companyName}
        </Typography>
        <Typography variant="body2" sx={{mt: 1}}>{job.preview}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    jobTitle: PropTypes.string,
    companyName: PropTypes.string,
    preview: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default JobCard;
