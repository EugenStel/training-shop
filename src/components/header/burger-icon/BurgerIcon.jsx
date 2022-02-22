import burgerIcon from './assets/view-list.svg'
import closeIcon from './assets/close-icon.svg'

import './burger-icon.scss'

export const BurgerIcon = ({ mobileOpen }) => {
    return (
        <img src={mobileOpen ? closeIcon : burgerIcon} alt='burger' className='burger' />
    )
}