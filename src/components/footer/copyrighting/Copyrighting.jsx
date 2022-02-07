import stripe from './assets/Stripe.svg'
import visa from './assets/visa.svg'
import AES256 from './assets/AES256.svg'
import americanExpress from './assets/americanExpress.svg'
import discover from './assets/discover.svg'
import mastercard from './assets/mastercard.svg'
import paypal from './assets/paypal.svg'


import './copyrighting.scss'

export const FooterCopy = () => {
    const year = new Date().getFullYear();

    return (
        <div className='footer_copyright'>
            <div className='wrapper'>
                <div className='text'>Copyright © {year} all rights reserved</div>
                <div className='sponsors'>
                    <img src={stripe} alt='stripe' />
                    <img src={AES256} alt='AES256' />
                    <img src={paypal} alt='paypal' />
                    <img src={visa} alt='visa' />
                    <img src={mastercard} alt='mastercard' />
                    <img src={discover} alt='discover' />
                    <img src={americanExpress} alt='americanExpress' />
                </div>
                <a href='/#' target='_blank' className='text-link'>
                    Clevertec.ru/training
                </a>
            </div>
        </div>
    )
}