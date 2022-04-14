import { useState } from "react";
import { Contacts } from "./contacts/Contacts";
import { SocialIcons } from "./social-networks/Social";
import { HeaderMenu } from "./menu/Menu";
import { UserIconsNav } from "./user-icons/UserIcons";
import Logo from './assets/logo-CleverShop.svg'
import { Link } from "react-router-dom";
import { BurgerMenu } from "../burger-menu/BurgerMenu";
import { Drawer } from "../drawer/Drawer";
import { clearErrors } from "../../redux/order/orderActions";
import { clearCart } from "../../redux/cart/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { getOrderResponse } from "../../redux/order/orderSelectors";
import './header.scss'

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false)
    const dispatch = useDispatch()
    const orderResponse = useSelector(getOrderResponse)

    const handleMobileOpen = () => {
        setMobileOpen(!mobileOpen);
        !mobileOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    };

    const handleMobileClose = () => {
        setMobileOpen(false);
        document.body.style.overflow = 'visible'
    };

    const handleCartOpen = () => {
        setCartOpen(!cartOpen);
        !cartOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    };

    const clearLocalStorage = () => {
        localStorage.setItem('email', JSON.stringify(''))
        localStorage.setItem('phone', JSON.stringify(''))
        localStorage.setItem('country', JSON.stringify(''))
        localStorage.setItem('city', JSON.stringify(''))
        localStorage.setItem('street', JSON.stringify(''))
        localStorage.setItem('house', JSON.stringify(''))
        localStorage.setItem('postcode', JSON.stringify(''))
        localStorage.setItem('storeAdress', JSON.stringify(''))
        localStorage.setItem('card', JSON.stringify(''))
        localStorage.setItem('cardDate', JSON.stringify(''))
        localStorage.setItem('cardCVV', JSON.stringify(''))
        localStorage.setItem('cashEmail', JSON.stringify(''))
        localStorage.setItem('countryStore', JSON.stringify(''))
    }

    const handleCartClose = () => {
        setCartOpen(false);
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
            {cartOpen && <Drawer setCartOpen={setCartOpen} handleCartOpen={handleCartOpen} onClickOutside={() => { handleCartClose(false) }} handleCartClose={handleCartClose} />}
        </div>
    )
}