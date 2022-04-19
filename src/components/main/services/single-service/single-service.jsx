import PropTypes from 'prop-types';

import './single-service.scss';


export const SigleServiceItem = ({ imgSrc, title, desc, alt }) => {
    return (
        <div className='service_item'>
            <img src={imgSrc} alt={alt} className='service_item_img' />
            <div className='service_item_description'>
                <div className='title'>{title}</div>
                <div className='text'>{desc}</div>
            </div>
        </div>
    )
};

SigleServiceItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
