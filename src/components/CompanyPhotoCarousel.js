import PropTypes from 'prop-types';
import {Box} from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const CompanyPhotoCarousel = ({photos}) => (
  <Carousel
    autoPlay swipe interval={5000}
    IndicatorIcon={<Box sx={{width: 6, height: 6, bgcolor: 'currentColor', borderRadius: '50%'}} />}
    indicatorIconButtonProps={{sx: {'color': '#CCCCCC', 'p': '3px', '&:hover': {color: '#EE8927'}}}}
    activeIndicatorIconButtonProps={{sx: {'color': '#EE8927', '&:hover': {color: '#EE8927'}, 'p': '3px', '& > div': {width: 28, borderRadius: '5px'}}}}
  >
    {photos.reduce((groups, url, i) => {
      const g = Math.floor(i / 3);
      if (!groups[g]) groups[g] = [];
      groups[g].push(url);
      return groups;
    }, []).map((group, gi) => (
      <Box key={gi} sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1}}>
        {group.map((url, ji) => (
          <Box className="cursor-pointer" key={ji} component="img" src={url} alt={`公司照片 ${gi * 3 + ji + 1}`} draggable={false}
            sx={{width: 250, height: 150, objectFit: 'cover', userSelect: 'none'}} />
        ))}
      </Box>
    ))}
  </Carousel>
);

CompanyPhotoCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CompanyPhotoCarousel;
