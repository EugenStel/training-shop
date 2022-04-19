import './promo.scss'

export const Promo = () => {
    return (
        <div className='promo'>
            <div className='promo_left'>
                <div className='card_btn'>
                    <div className='title'>NEW SEASON</div>
                    <div className='text'>LOOKBOOK COLLECTION</div>
                </div>
            </div>
            <div className='promo_right'>
                <div className='card_btn'>
                    <div className='title'>SALE</div>
                    <div className='text'>
                        GET UP TO <span className='text-color'>50% OFF</span>
                    </div>
                </div>
            </div>
        </div>
    )
}