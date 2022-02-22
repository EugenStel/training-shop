import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";


import './sliders.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';


export const Sliders = ({ slides }) => {
    return (
        <div className='slider' data-test-id='main-slider'>
            <Swiper
                onSlideChange={() => console.log('slide change')}
                navigation={true}
                modules={[Navigation]}
            >
                {slides.map(({ id, imgSrc, title, description, alt }) => (
                    <SwiperSlide key={id}>
                        <div key={id} className='slider-block'>
                            <img src={imgSrc} alt={alt} className='slider-img' />
                            {title && description && (
                                <div className='slide_content_button'>
                                    <div className='slide_content_button-title'>{title}</div>
                                    <div className='slide_content_button-description'>{description}</div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
};



Sliders.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            imageSrc: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
            nameImg: PropTypes.string,
        })
    ).isRequired
};
