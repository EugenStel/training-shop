import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, FreeMode, Navigation, Thumbs } from "swiper";
import up from './assets/chevron-left.svg'
import down from './assets/chevron-right.svg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './product-slider.scss';


export const ProductSlider = ({ slides }) => {
    const host = 'https://training.cleverland.by/shop';
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const setNext = () => controlledSwiper.slideNext();
    const setPrev = () => controlledSwiper.slidePrev();

    return (
        <div className='slider_product' data-test-id='product-slider'>
            <div className='side_block'>
                <div className='arr_up_down'>
                    <img src={up} alt='arr_up' className='arr_up' onClick={setPrev} />
                    <img src={down} alt='arr_down' className='arr_down' onClick={setNext} />
                </div>
                <div className='small_img-wrapper'>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        slidesPerView={4}
                        spaceBetween={20}
                        watchSlidesProgress
                        modules={[Navigation, Thumbs, Controller]}
                        direction='vertical'
                    >
                        {slides?.images?.map(({ id, url, color }) => (
                            <SwiperSlide key={id}>
                                <img key={id} src={`${host}${url}`} className='small_img' alt={color} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
            <div className='slider-product'>
                <Swiper
                    onSwiper={setControlledSwiper}
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs, Controller]}
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {slides?.images?.map(({ id, url, color }) => {
                        return (
                            <div key={id} className='slider-block'>
                                <SwiperSlide key={id}>
                                    <img src={`${host}${url}`} alt={color} className='slider-img' />
                                </SwiperSlide>
                            </div>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}


// ProductSlider.propTypes = {
//     slides: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string,
//             url: PropTypes.string,
//             color: PropTypes.string
//         })
//     ).isRequired
// };