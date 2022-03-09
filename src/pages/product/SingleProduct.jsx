import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductHeader } from "../../components/product-head/Product-head";
import { Checkout } from "../../components/single-product/checkout/Checkout";
import { Opportunity } from "../../components/single-product/opportunity/Opportunity";
import { ProductSlider } from "../../components/single-product/slider/ProductSlider";
import { PRODUCTS_DATA } from "../../constants/products";
import { CardRating } from "../../components/clothes-card-item/card-raiting/CardRaiting";
import { Reviews } from "../../components/single-product/reviews/Reviews";
import { Related } from "../../components/single-product/related/Related";

import hanger from '../../components/single-product/assets/clothes-hanger.jpg'
import favourite from '../../components/single-product/control/assets/heart.svg'
import compare from '../../components/single-product/control/assets/scale.svg'
import annotation from '../../components/single-product/reviews/assets/annotation.svg'


import './single-prod.scss'

export const SinglePage = ({ productType }) => {
    const host = 'https://training.cleverland.by/shop';
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')

    let uniqueColors = new Set(product?.images?.map(({ color }) => color));

    useEffect(() => {
        setProduct(PRODUCTS_DATA[productType].find((item) => item?.id === id))
        setSize(product?.sizes[0])
        setColor(product?.images[0]?.color)
    }, [productType, id, product])


    const sizeHandler = (e) => {
        setSize(e.target.textContent)
    }

    const colorHandler = (color) => {
        setColor(color)
    }

    const arrColors = product?.images?.map((item) => {
        return item.color
    })

    const uniqColors = [...new Set(arrColors?.join(',').split(','))]

    let reviewsCounter = product?.reviews?.length;

    let sizes = [].slice.call(document.querySelectorAll('.button-size'));
    sizes.forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            sizes.forEach((s) => {
                if (s !== this) {
                    s.classList.remove('selected');
                }
            });
            this.classList.add('selected');
        }, false);
    });

    let colors = [].slice.call(document.querySelectorAll('img.right_img_item'));
    colors.forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            colors.forEach((c) => {
                if (c !== this) {
                    c.classList.remove('selected');
                }
            });
            this.classList.add('selected');
        }, false);
    });


    return (
        <div className='page-product' data-test-id={`product-page-${productType}`}>
            <ProductHeader productType={productType} id={id} name={product?.name} rating={product?.rating} reviews={reviewsCounter} />
            <div className='page-product-main wrapper'>
                <ProductSlider slides={product} />
                <div className='params'>
                    <span>
                        COLOR:<span className='bold'>{color}</span>
                    </span>
                    <div className='right-img'>
                        {[...uniqueColors]
                            .map((item) =>
                                product?.images?.find(({ color }) => color === item)
                            )
                            .map(({ id, url, color }) => {
                                return (
                                    <div key={id} onClick={() => { colorHandler(color) }} className='right_img_item'>
                                        <img src={`${host}${url}`} alt="wear" className='right_img_item' />
                                    </div>
                                );
                            })}
                    </div>
                    <div className='size'>
                        SIZE:<span className='bold'>{size}</span>
                    </div>
                    <div className='size-btn'>
                        {product?.sizes?.map((text) => {
                            return <button type='button' key={text} onClick={sizeHandler} className='button-size'>{text}</button>
                        })}
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
                                    Color: {uniqColors.map((color, id) => {
                                        return <span className='black' key={id}> {color}</span>
                                    })}
                                </div>
                                <div className='text-size'>
                                    Size:<span className='black'> {product?.sizes.join(', ')}</span>
                                </div>
                                <div className='text-material'>
                                    Material:<span className='black'> {product?.material}</span>
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
                                    <span className='amount-reviews'>{reviewsCounter} Reviews</span>
                                </div>
                                <div className='annotation'>
                                    <img src={annotation} alt='annotation' className='annotation-img' />
                                    <span className='write-reviews'>Write a review</span>
                                </div>
                            </div>
                        </div>
                        <div className='reviews-below'>
                            <Reviews product={product} />
                        </div>
                    </div>
                </div>
            </div>

            <Related productType={productType} products={PRODUCTS_DATA} />
        </div>
    )
}