import { HEADER_MENU } from '../../../constants/header/menu'
import { Link } from 'react-router-dom';

import './menu.scss'
export const HeaderMenu = () => {
    return (
        <div className='menu' data-test-id='menu'>
            {HEADER_MENU.map(({ id, path, name }) => (
                <Link
                    key={id}
                    to={`/${path}`}
                    className='menu-item'
                    data-test-id={`menu-link-${path}`}>
                    <span>{name}</span>
                </Link>
            ))}
        </div>
    )
};
