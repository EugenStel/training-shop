import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardRating } from './card-raiting/CardRaiting';

import './clothes-card-item.scss';

export const ClothesCardItem = ({ card: { id, name, price, rating, images, discount }, productType }) => {
    const host = 'https://training.cleverland.by/shop';
    return (
        <Link to={`/${productType}/${id}`} className='cards-item' data-test-id={`clothes-card-${productType}`}>
            {discount && <span className='sale'>{discount}</span>}
            <img src={`${host}${images[0].url}`} alt='clothes' className='cards-item-img' />
            <div className='cards-item-name'>{name}</div>
            <div className='cards-item-price'>
                $ {price}
                <CardRating rating={rating} />
            </div>
        </Link>
    );
};



ClothesCardItem.propTypes = {
    card: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        images: PropTypes.array,
        rating: PropTypes.number,
        id: PropTypes.string,
    }).isRequired,
    productType: PropTypes.string.isRequired,
};
