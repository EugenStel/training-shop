import { useEffect, useRef } from "react";
import { HEADER_MENU } from "../../constants/header/menu";
import { Link } from "react-router-dom"

import './burger-menu.scss'

export const BurgerMenu = ({ handleMobileClose, onClickOutside }) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
                document.body.style.overflow = 'visible'
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [onClickOutside]);


    return (
        <div className='burger_menu' data-test-id='burger-menu' ref={ref}>
            {HEADER_MENU.map(({ id, path, name }) => (
                <Link key={id} to={`/${path}`} className='menu_item' onClick={handleMobileClose}>
                    <span>{name}</span>
                </Link>
            ))}
        </div>
    )
}