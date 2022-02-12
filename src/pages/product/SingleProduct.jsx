import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductHeader } from "../../components/product-head/Product-head";
import { Checkout } from "../../components/single-product/checkout/Checkout";
import { Opportunity } from "../../components/single-product/opportunity/Opportunity";
import { ProductSlider } from "../../components/single-product/slider/ProductSlider";
import { SLIDER_PRODUCT } from "../../constants/products/slider-product";
import { COLOR_IMG } from "../../constants/products/slider-product";
import { CLOTHES_CARDS } from "../../constants/main/clothes-cards";
import { CardRating } from "../../components/clothes-card-item/card-raiting/CardRaiting";
import { ClothesCardItem } from "../../components/clothes-card-item/ClothesCardItem";
import { Reviews } from "../../components/single-product/reviews/Reviews";

import hanger from '../../components/single-product/assets/clothes-hanger.jpg'
import favourite from '../../components/single-product/control/assets/heart.svg'
import compare from '../../components/single-product/control/assets/scale.svg'
import annotation from '../../components/single-product/reviews/assets/annotation.svg'

import './single-prod.scss'

export const SinglePage = ({ productType }) => {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        setProduct(CLOTHES_CARDS[productType].find((i) => i?.id === id))
    }, [productType, id])


    return (
        <div className='page-product' data-test-id={`product-page-${productType}`}>
            <ProductHeader productType={productType} id={id} name={product?.title} rating={product?.rating} />
            <div className='page-product-main wrapper'>
                <ProductSlider slides={SLIDER_PRODUCT} />
                <div className='params'>
                    <span>
                        COLOR:<span className='bold'>Blue</span>
                    </span>
                    <div className='right-img'>
                        {COLOR_IMG.map(({ id: idImg, imgSrc, alt }) => (
                            <img key={idImg} src={imgSrc} alt={alt} />
                        ))}
                    </div>
                    <div className='size'>
                        SIZE:<span className='bold'>S</span>
                    </div>
                    <div className='size-btn'>
                        <button type='button'>XS</button>
                        <button type='button'>S</button>
                        <button type='button'>M</button>
                        <button type='button'>L</button>
                    </div>
                    <div className='hanger'>
                        <img src={hanger} alt='hanger' className='hanger-img' />
                        <span>Size guide</span>
                    </div>
                    <div className='pay'>
                        <div className='cost'>$ {product?.price}</div>
                        <button type='button' className='pay-btn'>
                            ADD TO CARD
                        </button>
                        <img src={favourite} alt='favourite' className='heart-img' />
                        <img src={compare} alt='compare' className='scale-img' />
                    </div>
                    <Opportunity />
                    <div className='checkout'>
                        <span className='checkout-title'>
                            GUARANTEED SAFE CHECKOUT <hr />
                        </span>
                        <Checkout />
                    </div>
                    <div className='description'>
                        <div className='title'>DESCRIPTION</div>
                        <div className='text'>
                            <div className='text-title'>ADDITIONAL INFORMATION</div>
                            <div className='specifications'>
                                <div className='text-color'>
                                    Color:<span className='black'> Blue, White, Black, Grey</span>
                                </div>
                                <div className='text-size'>
                                    Size:<span className='black'>XS, S, M, L</span>
                                </div>
                                <div className='text-material'>
                                    Material:<span className='black'>100% Polyester</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='reviews'>
                        <div className='reviews-above'>
                            <div className='title'>REVIEWS</div>
                            <div className='subtitle-text'>
                                <div className='rating-reviews'>
                                    <CardRating rating={product?.rating} size='medium' />
                                    <span className='amount-reviews'>2 Reviews</span>
                                </div>
                                <div className='annotation'>
                                    <img src={annotation} alt='annotation' className='annotation-img' />
                                    <span className='write-reviews'>Write a review</span>
                                </div>
                            </div>
                        </div>
                        <div className='reviews-below'>
                            <Reviews />
                        </div>
                    </div>
                </div>
            </div>
            <div className='products wrapper'>
                <div className='products-title'>RELATED PRODUCTS</div>
                <div className='products-cards'>
                    {CLOTHES_CARDS[productType]
                        .filter((_, index) => index <= 3)
                        .map((cardItem) => (
                            <ClothesCardItem card={cardItem} productType={productType} key={cardItem.id} />
                        ))}
                </div>
            </div>
        </div>
    )
}