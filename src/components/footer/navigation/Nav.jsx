import { FOOTER_LINKS } from "../../../constants/footer/nav";
import { Link } from "react-router-dom";

import locationIcon from './assets/locationIcon.svg'
import clockIcon from './assets/clockIcon.svg'
import mailIcon from './assets/mailIcon.svg'
import phoneIcon from './assets/phoneIcon.svg'

import './nav.scss'

export const FooterNav = () => {
    return (
        <div className="footer_links">
            {FOOTER_LINKS.map(({ id, links }) => {
                return (
                    <div className="footer_link-item" key={id}>
                        {links.map(({ text, path }, index) =>
                        (
                            <Link
                                to={`/${path}`}
                                data-test-id={`footer-nav-link-${path}`}
                                className='footer_link'
                                key={index.toString()}>
                                {text}
                            </Link>
                        )
                        )}
                    </div>
                )
            })}
            <div className='footer_link-item'>
                <div className='footer_link'>CONTACT US</div>
                <a href='/#' className='footer_link'>
                    <img src={locationIcon} alt='locationIcon' />
                    <span>Belarus, Gomel, Lange 17</span>
                </a>
                <a href='/#' className='footer_link'>
                    <img src={phoneIcon} alt='phoneIcon' />
                    <span>+375 29 100 20 30</span>
                </a>
                <a href='/#' className='footer_link'>
                    <img src={clockIcon} alt='clockIcon' />
                    <span>All week 24/7</span>
                </a>
                <a href='/#' className='footer_link'>
                    <img src={mailIcon} alt='mailIcon' />
                    <span className='mail-text'>info@clevertec.ru</span>
                </a>
            </div>
        </div>
    )
}