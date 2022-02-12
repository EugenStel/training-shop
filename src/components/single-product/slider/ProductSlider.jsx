import PropTypes from 'prop-types';
import up from './assets/chevron-left.svg'
import down from './assets/chevron-right.svg'
import { SMALL_IMG } from '../../../constants/products/slider-product';
import { Sliders } from '../../sliders/Sliders';


import './product-slider.scss';

export const ProductSlider = ({ slides }) => {
    return (
        <div className='slider_product'>
            <div className='side_block'>
                <div className='arr_up_down'>
                    <img src={up} alt='arr_up' className='arr_up' />
                    <img src={down} alt='arr_down' className='arr_down' />
                </div>
                <div className='small_img'>
                    {SMALL_IMG.map(({ id, imgSrc, alt }) => (
                        <img key={id} src={imgSrc} className='small_img' alt={alt} />
                    ))}
                </div>
            </div>
            <Sliders slides={slides} />
        </div>
    )
}

ProductSlider.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            imgSrc: PropTypes.string,
            alt: PropTypes.string
        })
    ).isRequired
};