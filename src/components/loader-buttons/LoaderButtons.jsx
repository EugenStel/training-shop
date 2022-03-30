import loader_button from './assets/loader-buttons.svg'
import loader_footer from './assets/loader-footer-buttons.svg'

import './loader-buttons.scss'

export const LoaderButtons = () => {
    return (
        <div className='loader-buttons'>
            <img src={loader_button} alt="loader-buttons" />
        </div>
    )
}

export const LoaderFooterButtons = () => {
    return (
        <div className='loader-footer-buttons'>
            <img src={loader_footer} alt="loader-footer-buttons" />
        </div>
    )
}