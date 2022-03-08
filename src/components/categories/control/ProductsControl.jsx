import PropTypes from 'prop-types';
import filterIcon from './assets/filter-icon.svg';
import chevronRight from './assets/chevron-right.svg';
import gridIcon from './assets/grid-icon.svg';
import listIcon from './assets/list-icon.svg';
import closeFilterIcon from './assets/filter-close-icon.svg'

import './prod-control.scss'
export const ProductsControl = ({ onFilterOpen, isFilterOpen }) => {
    return (
        <div className='products_control'>
            <button className='filter' type='button' data-test-id='filter-button'>
                {!isFilterOpen ? (
                    <img src={filterIcon} alt='filter' className='filter_img' onClick={onFilterOpen} />
                ) : (
                    <img src={closeFilterIcon} alt='closeFilterIcon' className='cross' onClick={onFilterOpen} />
                )}
                FILTER
            </button>
            <div className='mode'>
                <img src={listIcon} alt='list' className='list_img' />
                <img src={gridIcon} alt='grid' className='grid_img' />
            </div>
            <div className='bestsellers'>
                BESTSELLERS
                <img src={chevronRight} alt='arrow' className='chevronRight_img' />
            </div>
        </div>
    )
}

ProductsControl.propTypes = {
    onFilterOpen: PropTypes.func.isRequired,
    isFilterOpen: PropTypes.bool.isRequired,
};
