import { CardRating } from '../../clothes-card-item/card-raiting/CardRaiting'
import { REVIEWS } from '../../../constants/products/reviews'


import './reviews.scss'

export const Reviews = () => (
    <div className='reviews'>
        {REVIEWS.map(({ id, author_name, text, rating, data }) => (
            <div key={id} className='reviews-text'>
                <div className='title'>
                    <div className='name'>{author_name}</div>
                    <div className='time-rating'>
                        {data}
                        <CardRating rating={rating} />
                    </div>
                </div>
                <div className='text'>{text}</div>
            </div>
        ))}
    </div>
);
