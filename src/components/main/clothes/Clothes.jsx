import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ClothesCardItem } from '../../clothes-card-item/clothes-card-item';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../redux/products/productsSelectors';
import { MAIN_CLOTHES_BLOCK_MENU } from '../../../constants/main/main-clothes-block-menu';
import './clothes.scss'

export const Clothes = ({ productType }) => {
    const products = useSelector(getProducts)

    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        const filterDefaultValue = 'isNewArrivals'
        setClothes(products[productType]?.filter((item) => item.particulars[filterDefaultValue]))
    }, [productType, products])

    const clothesMenuHandler = (e) => {
        let filterText = e.target.getAttribute("data-filter")
        let arr = products[productType]?.filter((item) => item.particulars[filterText])
        setClothes(arr)
    }

    let navLink = [].slice.call(document.querySelectorAll('.clothes-menu-item'));
    navLink.forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            navLink.forEach((nl) => {
                if (nl !== this) {
                    nl.classList.remove('active');
                }
            });
            this.classList.add('active');
        }, false);
    });

    return (
        <>
            <div className='clothes' data-test-id={`clothes-${productType}`}>
                <div className='clothes-header'>
                    <div className='clothes-title'>{`${productType}’s`}</div>
                    <div className='clothes-menu'>
                        {MAIN_CLOTHES_BLOCK_MENU.map(({ id, name, particularName }) => (
                            <div className='clothes-menu-item' key={id}
                                onClick={clothesMenuHandler}
                                data-filter={particularName}
                                data-test-id={`clothes-${productType}-${particularName}`}>
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='cards'>
                    {clothes?.map((card) => (
                        <ClothesCardItem key={card.id} card={card} productType={productType} />
                    ))}
                </div>
                <Link to={`/${productType}`} className='cards-item-a'>
                    <button className='clothes-button' type='button'>
                        SEE ALL
                    </button>
                </Link>
            </div>
        </>
    )
}


Clothes.propTypes = {
    productType: PropTypes.string.isRequired,
};