import aes from '../../components/single-product/checkout/assets/AES256_x42.png'
import americanExpress from '../../components/single-product/checkout/assets/american-express_x42.png'
import discover from '../../components/single-product/checkout/assets/discover_x42.png'
import mastercard from '../../components/single-product/checkout/assets/mastercard_x42.png'
import paypal from '../../components/single-product/checkout/assets/paypal_2_x42.png'
import stripe from '../../components/single-product/checkout/assets/Stripe_x42.png'
import visa from '../../components/single-product/checkout/assets/visa_x42.png'

export const CHECKOUT = [
    {
        id: '1',
        imgSrc: stripe,
        alt: 'stripe'
    },
    {
        id: '2',
        imgSrc: aes,
        alt: 'aes'
    },
    {
        id: '3',
        imgSrc: paypal,
        alt: 'paypal'
    },
    {
        id: '4',
        imgSrc: visa,
        alt: 'visa'
    },
    {
        id: '5',
        imgSrc: mastercard,
        alt: 'mastercard'
    },
    {
        id: '6',
        imgSrc: discover,
        alt: 'discover'
    },
    {
        id: '7',
        imgSrc: americanExpress,
        alt: 'americanExpress'
    }
];