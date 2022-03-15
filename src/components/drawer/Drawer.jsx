import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemsInCart } from "../../redux/cart/cartSelectors";
import { deleteItem, changeAmount } from "../../redux/cart/cartActions";

import trash from './assets/trash.svg'
import close from './assets/close.svg'
import plus from './assets/plus-sm.svg'
import minus from './assets/minus.svg'

import './drawer.scss'

export const Drawer = ({ onClickOutside, handleCartClose }) => {
    const dispatch = useDispatch()
    const items = useSelector(getItemsInCart)
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
                document.body.style.overflow = 'visible'
            }
        };
        const escFunction = (event) => {
            if (event.keyCode === 27) {
                onClickOutside && onClickOutside();
                document.body.style.overflow = 'visible'
            }
        };

        document.addEventListener("keydown", escFunction);
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener("keydown", escFunction);
        };
    }, [onClickOutside])

    const handleRemoveItem = (id) => dispatch(deleteItem(id));


    const totalPrice = items.reduce((total, { amount, price }) => total + amount * price, 0).toFixed(2);
    return (
        <>
            <div className="overlay">
                <div className="drawer" ref={ref} data-test-id='cart'>
                    <h2 className="drawer-header">Shopping Cart
                        <img src={close} alt="remove" onClick={handleCartClose} />
                    </h2>
                    {items.length > 0 ?
                        <>
                            <div className="cart-items">
                                <div className="cart-stages">
                                    <div className="active"> Item in Cart </div>
                                    &frasl;
                                    <div> Delivery Info </div>
                                    &frasl;
                                    <div> Payment </div>
                                </div>
                                {
                                    items.map(({ id, name, color, size, amount, price, url }) => (
                                        <div className="cartItem" key={id} data-test-id='cart-card'>
                                            <div style={{ backgroundImage: `url(${url})` }} className="cartItemImg"></div>
                                            <div>
                                                <div className="cart-item-info">
                                                    <p className="cart-item-title">{name}</p>
                                                    <p className="cart-item-details">{color}, {size}</p>
                                                </div>
                                                <div className="cart-item-control">
                                                    <button
                                                        data-test-id='minus-product'
                                                        type='button'
                                                        className="minus"
                                                        onClick={() => dispatch(changeAmount({ id, value: amount - 1 }))}>
                                                        <img src={minus} alt='minus' />
                                                    </button>
                                                    <input type='text'
                                                        value={amount}
                                                        onChange={({ target: { value } }) => dispatch(changeAmount({ id, value: Number(value) }))} />
                                                    <button
                                                        data-test-id='plus-product'
                                                        type='button'
                                                        className="plus"
                                                        onClick={() => dispatch(changeAmount({ id, value: amount + 1 }))}>
                                                        <img src={plus} alt='plus' />
                                                    </button>
                                                    <div className="cart-price">${`${(price * amount).toFixed(2)}`}</div>
                                                    <img
                                                        data-test-id='remove-product'
                                                        className="removeBtn"
                                                        src={trash}
                                                        alt="remove"
                                                        onClick={() => handleRemoveItem(id)} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    )}
                            </div>
                            <div className="cartTotalBLock">
                                <ul className='cartTotalBLock'>
                                    <li>
                                        <span>Total:</span>
                                        <div></div>
                                        <b>{totalPrice}</b>
                                    </li>
                                </ul>
                                <div className="control">
                                    <button className='blackButton'>Further</button>
                                    <button className='blackButton' onClick={handleCartClose}>View Cart</button>
                                </div>
                            </div>
                        </>
                        :
                        <div className="cartEmpty">
                            <h2>Sorry, your cart is empty</h2>
                            <button className="blackButton" onClick={handleCartClose}>
                                back to shopping
                            </button>
                        </div>
                    }


                </div>
            </div >
        </>
    )
}