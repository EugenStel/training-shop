import CartIcon from '../header/user-icons/assets/shoppingCartIcon.svg'
import { useSelector } from 'react-redux'
import { getItemsInCart } from '../../redux/cart/cartSelectors'
import './cart.scss'

export const CartHeader = () => {
    const items = useSelector(getItemsInCart)
    return (
        <>
            <div className='cart' data-test-id='cart-button'>
                <img src={CartIcon} alt='cart' className='cart_img' />
                {items.length > 0 && <span className='cart-value'>{items.length}</span>}
            </div>
        </>
    )
}