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
        const escFunction = (event) => {
            if (event.keyCode === 27) {
                onClickOutside && onClickOutside();
                document.body.style.overflow = 'visible'
            }
        };

        document.addEventListener("keydown", escFunction);
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener("keydown", escFunction);
        };
    }, [onClickOutside]);


    return (
        <div className='burger_menu' data-test-id='burger-menu' >
            {HEADER_MENU.map(({ id, path, name }) => (
                <Link key={id} to={`/${path}`} className='menu_item' onClick={handleMobileClose} ref={ref}>
                    <span>{name}</span>
                </Link>
            ))}
        </div>
    )
}