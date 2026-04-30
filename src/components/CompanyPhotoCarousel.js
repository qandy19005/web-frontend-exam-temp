import PropTypes from 'prop-types';
import {Box} from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CAROUSEL_STYLES = `
  .company-carousel { padding-bottom: 30px !important; }
  .company-carousel .swiper-pagination-bullet {
    width: 6px; height: 6px;
    background: #CCCCCC; opacity: 1;
    border-radius: 50%;
    transition: width 0.2s, border-radius 0.2s;
  }
  .company-carousel .swiper-pagination-bullet-active {
    width: 28px; border-radius: 5px; background: #EE8927;
  }
  .company-carousel .swiper-pagination-bullet:hover { background: #EE8927; }
`;

const CompanyPhotoCarousel = ({photos}) => {
  const groups = photos.reduce((acc, url, i) => {
    const g = Math.floor(i / 3);
    if (!acc[g]) acc[g] = [];
    acc[g].push(url);
    return acc;
  }, []);

  return (
    <>
      <style>{CAROUSEL_STYLES}</style>
      <Swiper
        className="company-carousel"
        modules={[Autoplay, Pagination]}
        slidesPerView={1.18}
        breakpoints={{600: {slidesPerView: 2.7}}}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        pagination={{clickable: true}}
        loop={groups.length > 3}
      >
        {photos.map((url, i) => (
          <SwiperSlide key={i}>
            <Box
              className="cursor-pointer"
              component="img"
              src={url}
              alt={`公司照片 $1}`}
              draggable={false}
              sx={{height: 150, objectFit: 'cover', userSelect: 'none'}}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

CompanyPhotoCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CompanyPhotoCarousel;
