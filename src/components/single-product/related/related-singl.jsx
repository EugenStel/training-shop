import { ClothesCardItem } from "../../clothes-card-item/clothes-card-item"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import next from '../../sliders/assets/rightButton.svg'
import prev from '../../sliders/assets/leftButton.svg'
import './related.scss'

export const Related = ({ productType, products }) => {
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
                            modules={[Controller]}
                            onSwiper={setControlledSwiper}
                            breakpoints={{
                                260: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                650: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                1000: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {products[productType].map((cardItem) => {
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