import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardRating } from './card-raiting/CardRaiting';

import './clothes-card-item.scss';

export const ClothesCardItem = ({ card: { title, price, imgSrc, rating, id }, productType }) => {
    return (
        <Link to={`/${productType}/${id}`} className='cards-item' data-test-id={`clothes-card-${productType}`}>
            <img src={imgSrc} alt='clothes' className='cards-item-img' />
            <div className='cards-item-name'>{title}</div>
            <div className='cards-item-price'>
                $ {price}
                <CardRating rating={rating} />
            </div>
        </Link>
    );
};

ClothesCardItem.propTypes = {
    card: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.string,
        imgSrc: PropTypes.string,
        rating: PropTypes.number,
        id: PropTypes.string,
    }).isRequired,
    productType: PropTypes.string.isRequired,
};
