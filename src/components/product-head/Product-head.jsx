import PropTypes from "prop-types"
import { Breadcrumbs } from "../categories/header/breadcrumbs/Breadcrumbs"
import { CardRating } from "../clothes-card-item/card-raiting/CardRaiting"
import shareButton from '../categories/header/assets/share-button.svg'
import arrow from '../categories/header/breadcrumbs/assets/arrow.svg'

import './prod-head.scss'

export const ProductHeader = ({ productType, name, id, raiting }) => {
    return (
        <div className='product-page-header'>
            <div className='header_product_top wrapper'>
                <div className='breadcrumbs_product'>
                    <Breadcrumbs productType={productType} />
                    <img src={arrow} alt="arrow" className="arrow" />
                    <span className='product'>{name}{id}</span>
                </div>
                <div className='share'>
                    <img src={shareButton} alt='share' className='share-img' />
                    Share
                </div>
            </div>
            <div className='header_product_title wrapper'>
                <span className='title'>{name}Text</span>
            </div>
            <div className='header_product_bottom wrapper'>
                <div className='rating'>
                    <CardRating rating={raiting} />
                    <span className='reviews'>2 Reviews</span>
                </div>
                <div className='count'>
                    <span className='sku'>
                        SKU: <span className='bold'>777</span>
                    </span>
                    <span className='availability'>
                        Availability: <span className='bold'>In Stock</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

ProductHeader.propTypes = {
    productType: PropTypes.string.isRequired,
    name: PropTypes.string,
    raiting: PropTypes.number
};

ProductHeader.defaultProps = {
    name: '',
    rating: 0,
};