import PropTypes from "prop-types"
import { useState } from "react"
import { ProductsHeader } from "../../components/categories/header/ProductsHeader"
import { ProductsControl } from "../../components/categories/control/ProductsControl"
import { Filters } from "../../components/categories/filters/Filters"
import { CLOTHES_CARDS } from "../../constants/main/clothes-cards"
import { ClothesCardItem } from "../../components/clothes-card-item/ClothesCardItem"

import './products.scss'

export const ProductsPage = ({ productType }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const onFilterOpen = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <div className="products_categ">
            <ProductsHeader productType={productType} />
            <div className="wrapper">
                <ProductsControl onFilterOpen={onFilterOpen} isFilterOpen={isFilterOpen} />
                {isFilterOpen && <Filters />}
            </div>
            <div className="cards">
                {CLOTHES_CARDS[productType].map((card) => {
                    return <ClothesCardItem key={card.id} card={card} productType={productType} />
                })}
            </div>
        </div>
    )
}

ProductsPage.propTypes = {
    productType: PropTypes.string.isRequired
};