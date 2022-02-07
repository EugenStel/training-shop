import CartIcon from '../header/user-icons/assets/shoppingCartIcon.svg'

import './cart.scss'

export const Cart = () => {
    return (
        <>
            <div className='cart'>
                <img src={CartIcon} alt='cart' className='cart_img' />
            </div>
        </>
    )
}