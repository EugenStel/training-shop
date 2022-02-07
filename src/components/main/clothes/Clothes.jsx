import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ClothesCardItem } from '../../clothes-card-item/ClothesCardItem';
import { CLOTHES_MENU } from '../../../constants/main/clothes-menu';
import { CLOTHES_CARDS } from '../../../constants/main/clothes-cards';

import './clothes.scss'
export const Clothes = ({ productType }) => {
    return (
        <>
            <div className='clothes' data-test-id={`clothes-${productType}`}>
                <div className='clothes-header'>
                    <div className='clothes-title'>{`${productType}’s`}</div>
                    <div className='clothes-menu'>
                        {CLOTHES_MENU.map(({ id, name }) => (
                            <div className='clothes-menu-item' key={id}>
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='cards'>
                    {CLOTHES_CARDS[productType]
                        .filter((_, index) => index <= 7)
                        .map((card) => (
                            <ClothesCardItem key={card.id} card={card} productType={productType} />
                        ))}
                </div>
                <Link to={`/${productType}`} className='cards-item-a'>
                    <button className='clothes-button' type='button'>
                        SEE ALL
                    </button>
                </Link>
            </div>
        </>
    )
}


Clothes.propTypes = {
    productType: PropTypes.string.isRequired,
};