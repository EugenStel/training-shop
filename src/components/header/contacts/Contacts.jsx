import { CONTACTS_HEADER } from '../../../constants/header/contacts';

import './contacts.scss'

export const Contacts = () => {
    return (
        <div className='contacts'>
            {CONTACTS_HEADER.map(({ id, data, imgSrc, title }) => (
                <a href='/#' className='contacts_item' key={id}>
                    <img src={imgSrc} alt={title} className='contacts_item_img' />
                    <span>{data}</span>
                </a>
            ))}
        </div>
    )
};