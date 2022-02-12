import { FilterItem } from "./filter-item/FilterItem";
import { FILTERS } from "../../../constants/products/filters";
import './filters.scss'

export const Filters = () => {
    return (
        <div className='filters'>
            <div className='color'>
                <div className='title'>COLOR</div>
                <div className='filter'>
                    {FILTERS.byColor.map(({ id, color_name }) => (
                        <FilterItem key={id} id={id} text={color_name} type='color' />
                    ))}
                </div>
            </div>
            <div className='size'>
                <div className='title'>SIZE</div>
                <div className='filter'>
                    {FILTERS.bySize.map(({ id, size }) => (
                        <FilterItem key={id} id={id} text={size} type='size' />
                    ))}
                </div>
            </div>
            <div className='brand'>
                <div className='title'>BRAND</div>
                <div className='filter'>
                    {FILTERS.byBrand.map(({ id, brand_name }) => (
                        <FilterItem key={id} id={id} text={brand_name} type='brand' />
                    ))}
                </div>
            </div>
            <div className='price'>
                <div className='title'>PRICE</div>
                <div className='filter'>
                    {FILTERS.byPrice.map(({ id, price }) => (
                        <FilterItem key={id} id={id} text={price} type='price' />
                    ))}
                </div>
            </div>
        </div>
    )
}