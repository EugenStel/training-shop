import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import { ProductsHeader } from "../../components/categories/header/ProductsHeader"
import { ProductsControl } from "../../components/categories/control/ProductsControl"
import { Filters } from "../../components/categories/filters/Filters"
import { ClothesCardItem } from "../../components/clothes-card-item/ClothesCardItem"
import { useSelector } from "react-redux"
import { getProducts } from "../../redux/products/productsSelectors"

import './products.scss'

export const ProductsPage = ({ productType }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const products = useSelector(getProducts)


    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState([]);

    const isShowCounter = (
        color.length !== 0 ||
        brand.length !== 0 ||
        size.length !== 0 ||
        price.length !== 0
    )

    const onFilterOpen = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const arrBrand = products[productType]?.map((item) => {
        return item.brand
    })
    const uniqBrand = [...new Set(arrBrand)]

    const arrSizes = products[productType]?.map((item) => {
        return item.sizes
    })
    const uniqSizes = [...new Set(arrSizes.join(',').split(','))]

    const arrColors = products[productType]?.map((item) => {
        return item.images.map((obj) => {
            return obj.color
        })
    })

    const uniqColors = [...new Set(arrColors.join(',').split(','))]

    const handleColorChange = ({ target: { checked, value } }) => {
        console.log(value)
        console.log(checked)
    }

    const onColorChange = ({ target: { checked, value } }) => {
        setColor(
            !color.includes(value) && checked
                ? [...color, value]
                : color.filter((n) => n !== value)
        );
    };

    const onSizeChange = ({ target: { checked, value } }) => {
        setSize(
            !size.includes(value) && checked
                ? [...size, value]
                : size.filter((n) => n !== value)
        );
    };

    const onBrandChange = ({ target: { checked, value } }) => {
        setBrand(
            !brand.includes(value) && checked
                ? [...brand, value]
                : brand.filter((n) => n !== value)
        );
    };

    const onPriceChange = ({ target: { checked, value } }) => {
        let modValue = [value, ...value.replace(/[^-\d]/g, "").split("-")].map(
            (e, i) => (i === 0 ? e : +e)
        );
        setPrice(
            !price.includes(value) && checked
                ? [...price, value, modValue]
                : price.filter((n) => {
                    return n !== value && n[0] !== modValue[0];
                })
        );
    };

    useEffect(() => {
        document.querySelectorAll('input[type="checkbox"]').forEach(e => e.checked = false)
        setIsFilterOpen(false)
        setSize('')
        setColor('')
        setBrand('')
        setPrice([])
    }, [productType])


    const filteredGoods = products[productType]?.filter((n) => {
        return (
            (!color.length ||
                n.images
                    .map((e) => {
                        return color.includes(e.color);
                    })
                    .includes(true)) &&
            (!brand.length || brand.includes(n.brand)) &&
            (!size.length ||
                n.sizes
                    .map((e) => {
                        return size.includes(e);
                    })
                    .includes(true)) &&
            (!price.length ||
                price
                    .map((e, i) => {
                        return (!e[1] || e[1] <= n.price) && (!e[2] || e[2] >= n.price);
                    })
                    .includes(true))
        );
    });

    return (
        <div className='products-page' data-test-id={`products-page-${productType}`}>
            <ProductsHeader productType={productType} />
            <div className="wrapper">
                <ProductsControl onFilterOpen={onFilterOpen} isFilterOpen={isFilterOpen} />
                {isFilterOpen &&
                    <Filters
                        productType={productType}
                        uniqColors={uniqColors}
                        uniqSizes={uniqSizes}
                        uniqBrand={uniqBrand}
                        handleColorChange={handleColorChange}
                        onColorChange={onColorChange}
                        onSizeChange={onSizeChange}
                        onBrandChange={onBrandChange}
                        onPriceChange={onPriceChange}
                    />}
            </div>
            {
                isShowCounter && <div className="category__counter goods-counter wrapper">
                    <div className="goods-counter__container _container">
                        <div className="goods-counter__body">
                            {isShowCounter && (
                                <div className="goods-counter__column">
                                    <div className="goods-counter__found">
                                        {filteredGoods.length} items Found
                                    </div>
                                </div>
                            )}
                            {color.length !== 0 && (
                                <div className="goods-counter__column">
                                    <span className="goods-counter__title">Color: </span>
                                    {color.map((e, i) => {
                                        return (
                                            <span className="goods-counter__item" key={i}>
                                                {e}
                                            </span>
                                        );
                                    })}
                                </div>
                            )}
                            {brand.length !== 0 && (
                                <div className="goods-counter__column">
                                    <span className="goods-counter__title">Brand:</span>
                                    {brand.map((e, i) => {
                                        return (
                                            <span className="goods-counter__item" key={i}>
                                                {e}
                                            </span>
                                        );
                                    })}
                                </div>
                            )}
                            {size.length !== 0 && (
                                <div className="goods-counter__column">
                                    <span className="goods-counter__title">Size: </span>
                                    {size.map((e, i) => {
                                        return (
                                            <span className="goods-counter__item" key={i}>
                                                {e}
                                            </span>
                                        );
                                    })}
                                </div>
                            )}
                            {price.length !== 0 && (
                                <div className="goods-counter__column">
                                    <span className="goods-counter__title">Price:</span>
                                    {price.map((e, i) => {
                                        return (
                                            Array.isArray(e) && <span className="goods-counter__item" key={i}>{e[0]}
                                            </span>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            }
            <div className="cards">
                {filteredGoods.map((card) => {
                    return <ClothesCardItem key={card.id} card={card} productType={productType} />
                })}
            </div>
        </div>
    )
}

ProductsPage.propTypes = {
    productType: PropTypes.string.isRequired
};