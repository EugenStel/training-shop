import PhoneIcon from '../../components/header/contacts/assets/PhoneIcon.svg';
import ClockIcon from '../../components/header/contacts/assets/ClockIcon.svg';
import LocationMarkerIcon from '../../components/header/contacts/assets/LocationMarkerIcon.svg';

export const CONTACTS_HEADER = [
    {
        id: '1',
        title: 'phone',
        data: '+375 29 100 20 30',
        imgSrc: PhoneIcon
    },
    {
        id: '2',
        title: 'adress',
        data: 'Belarus, Gomel, Lange 17',
        imgSrc: LocationMarkerIcon
    },
    {
        id: '3',
        title: 'schedule',
        data: 'All week 24/7',
        imgSrc: ClockIcon
    }
];