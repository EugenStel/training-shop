import { BLOG_POSTS } from "../../../constants/main/blog";
import { SinglBlogItem } from "./single-blog-item/SingleItem";
import { Link } from 'react-router-dom';

import './blog.scss'

export const Blog = () => {
    return (
        <div className='blog'>
            <div className='blog_header'>
                <div className='title'>LATEST FROM BLOG</div>
                <Link to='/blog' className='link'>
                    SEE ALL
                </Link>
            </div>
            <div className='blog_main'>
                {BLOG_POSTS.map(({ id, imgSrc, alt, title, desc, path }) => (
                    <SinglBlogItem key={id} img={imgSrc} alt={alt} title={title} desc={desc} path={path} />
                ))}
            </div>
        </div>
    )
}