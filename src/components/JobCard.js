import PropTypes from 'prop-types';
import {Card, Typography} from '@mui/material';
import bookSvg from './../assets/book-outline.svg';
import personSvg from './../assets/person-outline.svg';
import salarySvg from './../assets/salary.svg';

const JobCard = ({job, onClick}) => (
  <Card variant="outlined" className="rounded-md border-gray-500 p-4 hover:shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
    <Typography className="font-bold text-2xl text-gray-1000 mb-[10px]" noWrap>{job.companyName}</Typography>
    <div className="flex items-center mb-[8px]">
      <img src={personSvg} />
      <Typography className="text-sm text-gray-800 ml-[6px]" noWrap>
        {job.jobTitle}
      </Typography>
    </div>
    <div className="flex items-center mb-[8px]">
      <img src={bookSvg} />
      <Typography className="text-sm text-gray-800 ml-[6px]" noWrap>
        {job.educationLabel}
      </Typography>
    </div>
    <div className="flex items-center mb-[8px]">
      <img src={salarySvg} />
      <Typography className="text-sm text-gray-800 ml-[6px]" noWrap>
        {job.salaryLabel}
      </Typography>
    </div>
    <Typography className="text-sm text-gray-1000 line-clamp-1" sx={{mt: 1}}>{job.preview}</Typography>
    <Typography className="text-sm text-orange-700 text-center cursor-pointer font-bold" sx={{mt: 1}} onClick={() => onClick(job.id)}>查看細節</Typography>
  </Card>
);

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    jobTitle: PropTypes.string,
    companyName: PropTypes.string,
    preview: PropTypes.string,
    educationLabel: PropTypes.string,
    salaryLabel: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default JobCard;
