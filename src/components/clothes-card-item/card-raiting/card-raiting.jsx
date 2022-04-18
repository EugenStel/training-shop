import PropTypes from 'prop-types';


import starWithRaiting from './assets/starWithRaiting.svg'
import starWithoutRaiting from './assets/starWithoutRaiting.svg'

import './card-raiting.scss';

const raitingSize = {
    small: '14px',
    medium: '22px',
};

const maxRaitingValue = 5;

export const CardRating = ({ size, rating }) => {
    const arrRaiting = Array.from(Array(maxRaitingValue).keys());
    return (
        <div className='rating'>
            {arrRaiting.map((item, index) => (
                <img
                    key={index.toString()}
                    src={item < rating ? starWithRaiting : starWithoutRaiting}
                    width={raitingSize[size]}
                    alt='raiting-icon'
                    className='rating-img'
                />
            ))}
        </div>
    );
};

CardRating.propTypes = {
    size: PropTypes.oneOf(['small', 'medium']),
    rating: PropTypes.number
};

CardRating.defaultProps = {
    size: 'small',
    rating: 0
};