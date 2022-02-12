import PropTypes from 'prop-types';

import './filter-item.scss';

export const FilterItem = ({ text, id, type }) => {
    return (
        <label className='checkbox_label' htmlFor={`${type}-${id}`} key={id}>
            <input type='checkbox' className='checkbox_input' id={`${type}-${id}`} />
            <span className='checkbox_text'>{text}</span>
        </label>
    )
}

FilterItem.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};
