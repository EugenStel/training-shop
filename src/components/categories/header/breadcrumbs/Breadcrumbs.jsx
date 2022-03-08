import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import arrow from './assets/arrow.svg'

import './breadcrumbs.scss'

export const Breadcrumbs = ({ productType }) => {
    console.log(productType)
    return (
        <div className='breadcrumbs'>
            <Link to='/' className='home'>
                <span className='home'>Home page</span>
            </Link>
            <img src={arrow} alt="arrow" />
            <Link to={`/${productType}`} className='home'>
                <span className='current_page'>{productType}</span>
            </Link>
        </div>
    )
}

Breadcrumbs.propTypes = {
    productType: PropTypes.string.isRequired,
};