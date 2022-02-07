import delivery from '../../components/main/services/assets/truckIcon.svg';
import refresh from '../../components/main/services/assets/returnIcon.svg'
import support from '../../components/main/services/assets/supportIcon.svg'


export const SERVICES = [
    {
        id: '1',
        title: 'FREE SHIPPING',
        desc: 'On all UA order or order above $100',
        imgSrc: delivery,
        alt: 'Truck'
    },
    {
        id: '2',
        title: '30 DAYS RETURN',
        desc: 'Simply return it within 30 days for an exchange',
        imgSrc: refresh,
        alt: 'Return'
    },
    {
        id: '3',
        title: 'SUPPORT 24/7',
        desc: 'Contact us 24 hours a day, 7 days a week',
        imgSrc: support,
        alt: 'Support'
    }
];
