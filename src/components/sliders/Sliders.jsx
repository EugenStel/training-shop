import PropTypes from 'prop-types';

import nextButton from './assets/nextArrow.jpg'
import prevButton from './assets/prevArrow.jpg'

import './sliders.scss';

export const Sliders = ({ slides }) => {
    return (
        <div className='slider'>
            {slides.map(({ id, imgSrc, title, description, alt }) => (
                <div key={id} className='slider-block'>
                    <img src={prevButton} alt='slide-next' className='slide__prev-btn' />
                    <img src={nextButton} alt='slide-next' className='slide__next-btn' />
                    <img src={imgSrc} alt={alt} className='slider-img' />
                    {title && description && (
                        <div className='slide_content_button'>
                            <div className='slide_content_button-title'>{title}</div>
                            <div className='slide_content_button-description'>{description}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
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
