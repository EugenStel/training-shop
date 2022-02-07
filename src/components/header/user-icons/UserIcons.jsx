import { USER_ICONS_NAV } from "../../../constants/header/user-icons-nav";
import { Cart } from "../../cart/Cart";

import './user-icons.scss'

export const UserIconsNav = () => {
    return (
        <>
            <div className='header_icons_nav'>
                {USER_ICONS_NAV.map(({ id, imgSrc, alt }) => (
                    <a href='/#' className='header_icons_nav_item' key={id}>
                        <img src={imgSrc} alt={alt} className='header_icons_nav_item_img' />
                    </a>
                ))}
                <Cart />
            </div>
        </>
    )
}