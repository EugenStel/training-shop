import { useRef } from 'react'
import { getItemsInCart } from '../../../redux/cart/cartSelectors'
import { useSelector, useDispatch } from 'react-redux'
import { changeAmount, deleteItem } from '../../../redux/cart/cartActions'
import plus from '../assets/plus-sm.svg'
import minus from '../assets/minus.svg'
import trash from '../assets/trash.svg'

import './cart-roducts.scss'

export const CartProducts = () => {
    const items = useSelector(getItemsInCart)
    const dispatch = useDispatch()
    const refbtn = useRef(null)
    const handleRemoveItem = (id) => dispatch(deleteItem(id))
    const handleChangeAmount = (id, value) => dispatch(changeAmount({ id, value: Number(value) }))
    return (
        <>
            {
                items.map(({ id, name, color, size, amount, price, url }) => (
                    <div className="cart-item" key={id} data-test-id='cart-card'>
                        <div style={{ backgroundImage: `url(${url})` }} className="cart-item-img"></div>
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
                                    onChange={({ target: { value } }) => handleChangeAmount(id, value)} />
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
                                    className="remove-btn"
                                    src={trash}
                                    alt="remove"
                                    onClick={() => handleRemoveItem(id)}
                                    ref={refbtn}
                                />
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </>
    )
}