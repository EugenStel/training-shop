import burgerIcon from './assets/view-list.svg'
import closeIcon from './assets/close-icon.svg'

import './burger-icon.scss'

export const BurgerIcon = ({ mobileOpen }) => {
    return (
        <div className='burger' data-test-id='burger-menu-btn'>
            <img src={mobileOpen ? closeIcon : burgerIcon} alt='burger' />
        </div>
    )
}