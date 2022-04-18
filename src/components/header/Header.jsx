import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Contacts } from "./contacts/Contacts";
import { SocialIcons } from "./social-networks/social";
import { HeaderMenu } from "./menu/Menu";
import { UserIconsNav } from "./user-icons/user-icons";
import { BurgerMenu } from "../burger-menu/burger-menu";
import { Drawer } from "../drawer/drawer";
import { clearErrors } from "../../redux/order/orderActions";
import { clearCart } from "../../redux/cart/cartActions";
import { getOrderResponse } from "../../redux/order/orderSelectors";
import { clearLocalStorage } from "../../utils/clear-local-storage";
import Logo from './assets/logo-CleverShop.svg';
import './header.scss';

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false)
    const dispatch = useDispatch()
    const orderResponse = useSelector(getOrderResponse)

    const handleMobileOpen = () => {
        setMobileOpen(!mobileOpen)
        !mobileOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    }

    const handleMobileClose = () => {
        setMobileOpen(false)
        document.body.style.overflow = 'visible'
    }

    const handleCartOpen = () => {
        setCartOpen(!cartOpen)
        !cartOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    }

    const handleCartClose = () => {
        setCartOpen(false)
        clearLocalStorage()
        document.body.style.overflow = 'visible'
        if (orderResponse) {
            dispatch(clearCart())
            dispatch(clearErrors())
        }
    };

    return (
        <div className='header' data-test-id='header'>
            <div className='header_contacts'>
                <div className='wrapper'>
                    <Contacts />
                    <SocialIcons />
                </div>
            </div>
            <div className='header_nav'>
                <div className='wrapper'>
                    <Link
                        to='/'
                        className='header-nav-logo'
                        data-test-id='header-logo-link'>
                        <img src={Logo} alt='logo' className='header_nav_logo' />
                    </Link>
                    <HeaderMenu />
                    <UserIconsNav handleMobileOpen={handleMobileOpen} mobileOpen={mobileOpen} handleCartOpen={handleCartOpen} cartOpen={cartOpen} />
                </div>
            </div>
            {mobileOpen && <BurgerMenu handleMobileClose={handleMobileClose} onClickOutside={() => { setMobileOpen(false) }} />}
            {cartOpen && <Drawer
                setCartOpen={setCartOpen}
                handleCartOpen={handleCartOpen}
                onClickOutside={() => { handleCartClose(false) }}
                handleCartClose={handleCartClose} />}
        </div>
    )
}