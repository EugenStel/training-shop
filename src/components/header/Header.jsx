import { Contacts } from "./contacts/Contacts";
import { SocialIcons } from "./social-networks/Social";
import { HeaderMenu } from "./menu/Menu";
import { UserIconsNav } from "./user-icons/UserIcons";
import Logo from './assets/logo-CleverShop.svg'
import { Link } from "react-router-dom";
import './header.scss'

export const Header = () => {
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
                    <UserIconsNav />
                </div>
            </div>
        </div>
    )
}