import { FilterItem } from "./filter-item/filter-item";
import { FILTERS } from "../../../constants/products/filters";
import './filters.scss'

export const Filters = ({
    uniqColors,
    uniqSizes,
    uniqBrand,
    onColorChange,
    onSizeChange,
    onBrandChange,
    onPriceChange,
    productType
}) => {

    return (
        <div className='filters' data-test-id={`filters-${productType}`}>
            <div className='color' data-test-id='filters-color'>
                <div className='title'>COLOR</div>
                <div className='filter'  >
                    {uniqColors.map((item, index) => (
                        <FilterItem key={index} id={index} text={item} type='color' onValueChange={onColorChange} />
                    ))}
                </div>
            </div>
            <div className='size' data-test-id='filters-size'>
                <div className='title'>SIZE</div>
                <div className='filter'>
                    {uniqSizes.map((item, index) => (
                        <FilterItem key={index} id={index} text={item} type='size' onValueChange={onSizeChange} />
                    ))}
                </div>
            </div>
            <div className='brand' data-test-id='filters-brand'>
                <div className='title'>BRAND</div>
                <div className='filter'>
                    {uniqBrand.map((item, index) => (
                        <FilterItem key={index} id={index} text={item} type='brand' onValueChange={onBrandChange} />
                    ))}
                </div>
            </div>
            <div className='price'>
                <div className='title'>PRICE</div>
                <div className='filter'>
                    {FILTERS.byPrice.map(({ id, price }) => (
                        <FilterItem key={id} id={id} text={price} type='price' onValueChange={onPriceChange} />
                    ))}
                </div>
            </div>
        </div>
    )
}