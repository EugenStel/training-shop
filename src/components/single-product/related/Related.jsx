import { ClothesCardItem } from "../../clothes-card-item/ClothesCardItem"
import { CLOTHES_CARDS } from "../../../constants/main/clothes-cards"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';

import next from '../../sliders/assets/rightButton.svg'
import prev from '../../sliders/assets/leftButton.svg'


import './related.scss'

export const Related = ({ productType }) => {
    const [controlledSwiper, setControlledSwiper] = useState(null);

    const setNext = () => controlledSwiper.slideNext();
    const setPrev = () => controlledSwiper.slidePrev();
    return (
        <>
            <div className='products wrapper'>
                <div className="related-wrapper">
                    <div className='products-title'>RELATED PRODUCTS</div>
                    <div className="related-control">
                        <img src={prev} alt="prev" onClick={setPrev} />
                        <img src={next} alt="next" onClick={setNext} />
                    </div>
                </div>
                <div className='products-cards'>
                    <div className="products-swiper" data-test-id='related-slider'>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={4}
                            modules={[Controller]}
                            onSwiper={setControlledSwiper}
                        >
                            {CLOTHES_CARDS[productType].map((cardItem) => {
                                return (
                                    <SwiperSlide key={cardItem.id}>
                                        <ClothesCardItem card={cardItem} productType={productType} key={cardItem.id} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>

    )
}