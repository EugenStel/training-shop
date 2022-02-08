import PropTypes from 'prop-types';

import './single-blog.scss'



export const SinglBlogItem = ({ img, alt, title, desc, path }) => {
    return (
        <div className='blog_item'>
            <img src={img} alt={alt} className='item_img' />

            <div className='description'>
                <div className='item_title'>{title}</div>
                <div className='item_text'>{desc}</div>
            </div>
        </div>
    )
}

SinglBlogItem.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};