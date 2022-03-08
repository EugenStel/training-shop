import './filter-item.scss';

export const FilterItem = ({ text, id, type, onValueChange }) => {
    return (
        <label className='checkbox_label' htmlFor={`${type}-${id}`} key={id} data-test-id={`filter-${type}-${text}`}>
            <input type='checkbox' className='checkbox_input' id={`${type}-${id}`} value={text} onChange={onValueChange} />
            <span className='checkbox_text'>{text}</span>
        </label>
    )
}
