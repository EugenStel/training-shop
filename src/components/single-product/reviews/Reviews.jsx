import { CardRating } from '../../clothes-card-item/card-raiting/CardRaiting'



import './reviews.scss'

export const Reviews = ({ product }) => {
    return (
        <div className='reviews'>
            {product?.reviews?.map(({ id, name, text, rating }) => (
                <div key={id} className='reviews-text'>
                    <div className='title'>
                        <div className='name'>{name}</div>
                        <div className='time-rating'>
                            <CardRating rating={rating} />
                        </div>
                    </div>
                    <div className='text'>{text}</div>
                </div>
            ))}
        </div>
    );
}
