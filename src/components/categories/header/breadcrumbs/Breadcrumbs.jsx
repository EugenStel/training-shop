import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import arrow from './assets/arrow.svg'

import './breadcrumbs.scss'

export const Breadcrumbs = ({ productType }) => {
    return (
        <div className='breadcrumbs'>
            <Link to='/' className='home'>
                <span className='home'>Home page</span>
            </Link>
            <img src={arrow} alt="arrow" />
            <span className='current_page'>{productType}</span>
        </div>
    )
}

Breadcrumbs.propTypes = {
    productType: PropTypes.string.isRequired,
};