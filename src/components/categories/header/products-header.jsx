import PropTypes from "prop-types";
import { Breadcrumbs } from "./breadcrumbs/Breadcrumbs";

import shareButton from './assets/share-button.svg'

import './prod-header.scss'

export const ProductsHeader = ({ productType }) => {
    return (
        <div className='products_page_header'>
            <div className='header_top wrapper'>
                <Breadcrumbs productType={productType} />
                <div className='share'>
                    <img src={shareButton} alt='share' className='share_icon' />
                    Share
                </div>
            </div>
            <div className='header_bottom wrapper'>
                <span className='title'>{productType}</span>
            </div>
        </div>
    )
}

ProductsHeader.propTypes = {
    productType: PropTypes.string.isRequired,
};