import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemsInCart } from "../../redux/cart/cartSelectors";
import { Delivery } from "./delivery-info/DeliveryInfo";
import { Payment } from "./payment/Payment";
import { CartProducts } from "./cart-products/CartProducts";
import { ErrorOrder } from "./error-order/ErrorOrder";
import { SuccsessOrder } from "./succsess-order/SuccsessOrder";
import { getCities, getOrderError, getOrderResponse } from "../../redux/order/orderSelectors";
import { sendOrder, clearErrors } from "../../redux/order/orderActions";

import close from './assets/close.svg'

import './drawer.scss'

export const Drawer = ({ handleCartClose, setCartOpen }) => {

    const [paymentMethod, setPaymentMethod] = useState(JSON.parse(localStorage.getItem('paymentMethod')))

    const items = useSelector(getItemsInCart)
    const citiesSelect = useSelector(getCities)
    const isOrderError = useSelector(getOrderError)
    const orderResponse = useSelector(getOrderResponse)
    const dispatch = useDispatch()

    const totalPrice = items.reduce((total, { amount, price }) => total + amount * price, 0).toFixed(2);

    const ref = useRef(null);

    const [isItemInCart, setIsItemInCart] = useState(true)
    const [isDelivery, setIsDelivery] = useState(false)
    const [isPayment, setIsPayment] = useState(false)

    const [agree, setAgree] = useState(false)

    const [phoneError, setPhoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const [errorCountry, setErrorCountry] = useState(false)
    const [errorCity, setErrorCity] = useState(false)
    const [errorStreet, setErrorStreet] = useState(false)
    const [errorHouse, setErrorHouse] = useState(false)

    const [postCodeError, setPostCodeError] = useState(false)

    const [storeAdressError, setStoreAdressError] = useState(false)

    const [cardNumberError, setCardNumberError] = useState(false)
    const [cardDateError, setCardDateError] = useState(false)
    const [cardCVVError, setCardCVVError] = useState(false)

    const [paymentEmailError, setPaymentEmailError] = useState(false)

    const [rulesAgreeError, setRulesAgreeError] = useState(false)

    const errorsOffice = [phoneError, emailError, errorCountry, errorCity, errorStreet, errorHouse, postCodeError, rulesAgreeError]
    const errorsExpress = [phoneError, emailError, errorCountry, errorCity, errorStreet, errorHouse, rulesAgreeError]
    const errorsStore = [phoneError, emailError, storeAdressError, rulesAgreeError]

    const cardPaymentErros = [cardNumberError, cardDateError, cardCVVError]


    const clearLocalStorage = () => {
        localStorage.setItem('email', JSON.stringify(''))
        localStorage.setItem('phone', JSON.stringify(''))
        localStorage.setItem('country', JSON.stringify(''))
        localStorage.setItem('city', JSON.stringify(''))
        localStorage.setItem('street', JSON.stringify(''))
        localStorage.setItem('house', JSON.stringify(''))
        localStorage.setItem('postcode', JSON.stringify(''))
        localStorage.setItem('countryStore', JSON.stringify(''))
        localStorage.setItem('storeAdress', JSON.stringify(''))
        localStorage.setItem('card', JSON.stringify(''))
        localStorage.setItem('cardDate', JSON.stringify(''))
        localStorage.setItem('cardCVV', JSON.stringify(''))
        localStorage.setItem('cashEmail', JSON.stringify(''))
    }

    const closeCartOnClick = ({ target }) => {
        if (target.className === "overlay") {
            clearLocalStorage()
            setCartOpen(false);
            document.body.style.overflow = 'visible'
        }
    }

    const order = {
        "products": items,
        "totalPrice": totalPrice,
    }
    localStorage.setItem('order', JSON.stringify(order))

    const handleFurtherClick = () => {
        const deliveryMethod = JSON.parse(localStorage.getItem('deliveryMethod'))
        const paymentMethod = JSON.parse(localStorage.getItem('paymentMethod'))
        const email = JSON.parse(localStorage.getItem('email'))
        const phone = JSON.parse(localStorage.getItem('phone'))
        const country = JSON.parse(localStorage.getItem('country'))
        const city = JSON.parse(localStorage.getItem('city'))
        const street = JSON.parse(localStorage.getItem('street'))
        const house = JSON.parse(localStorage.getItem('house'))
        const postcode = JSON.parse(localStorage.getItem('postcode'))
        const storeAdress = JSON.parse(localStorage.getItem('storeAdress'))
        const card = JSON.parse(localStorage.getItem('card'))
        const cardDate = JSON.parse(localStorage.getItem('cardDate'))
        const cardCVV = JSON.parse(localStorage.getItem('cardCVV'))
        const cashEmail = JSON.parse(localStorage.getItem('cashEmail'))
        const prodAndSum = JSON.parse(localStorage.getItem('order'))
        if (isItemInCart) {
            setIsItemInCart(false)
            setIsDelivery(true)
        } else if (isDelivery) {
            if (deliveryMethod === 'pickup from post offices') {
                checkOfficeDel(email, phone, country, city, street, house, postcode)
                checkAgreeRules()
                if (phone && email && country && city && street && house && postcode && errorsOffice.every(value => value === false)) {
                    setIsDelivery(false)
                    setIsPayment(true)
                }
            } else if (deliveryMethod === 'express delivery') {
                checkExpressDel(email, phone, country, city, street, house)
                checkAgreeRules()
                if (phone && email && country && city && street && house && errorsExpress.every(value => value === false)) {
                    setIsDelivery(false)
                    setIsPayment(true)
                }
            } else if (deliveryMethod === 'store pickup') {
                checkStoreDel(email, phone, storeAdress)
                checkAgreeRules()
                if (phone && email && storeAdress && errorsStore.every(value => value === false)) {
                    setIsDelivery(false)
                    setIsPayment(true)
                }
            }
        } else if (isPayment) {
            if (paymentMethod === 'paypal') {
                checkEmailPayment(cashEmail)
                if (cashEmail && !paymentEmailError) {
                    dispatch(sendOrder({
                        'deliveryMethod': deliveryMethod,
                        'paymentMethod': paymentMethod,
                        'products': prodAndSum.products,
                        "totalPrice": prodAndSum.totalPrice,
                        'email': email,
                        'phone': phone,
                        'country': country,
                        'cashEmail': cashEmail,
                        'city': city,
                        'street': street,
                        'house': house,
                        'postcode': postcode,
                        'storeAddress': storeAdress,
                        'card': card,
                        'cardDate': cardDate,
                        'cardCVV': cardCVV
                    }))
                    setIsPayment(false)
                }
            } else if (paymentMethod === 'card') {
                chechCardMethods(card, cardDate, cardCVV)
                if (card && cardDate && cardCVV && cardPaymentErros.every(value => value === false)) {
                    dispatch(sendOrder({
                        'deliveryMethod': deliveryMethod,
                        'paymentMethod': paymentMethod,
                        'products': prodAndSum.products,
                        "totalPrice": prodAndSum.totalPrice,
                        'email': email,
                        'phone': phone,
                        'country': country,
                        'cashEmail': cashEmail,
                        'city': city,
                        'street': street,
                        'house': house,
                        'postcode': postcode,
                        'storeAddress': storeAdress,
                        'card': card,
                        'cardDate': cardDate,
                        'cardCVV': cardCVV
                    }))
                    setIsPayment(false)
                }
            } else if (paymentMethod === 'cash') {
                dispatch(sendOrder({
                    'deliveryMethod': deliveryMethod,
                    'paymentMethod': paymentMethod,
                    'products': prodAndSum.products,
                    "totalPrice": prodAndSum.totalPrice,
                    'email': email,
                    'phone': phone,
                    'country': country,
                    'cashEmail': cashEmail,
                    'city': city,
                    'street': street,
                    'house': house,
                    'postcode': postcode,
                    'storeAddress': storeAdress,
                    'card': card,
                    'cardDate': cardDate,
                    'cardCVV': cardCVV
                }))
                setIsPayment(false)
            }
        } else {
            setIsPayment(true)
            dispatch(clearErrors())
        }
    }

    const checkOfficeDel = (email, phone, country, city, street, house, postcode) => {
        checkEmail(email)
        checkPhone(phone)
        checkCountry(country)
        checkCity(city)
        checkStreet(street)
        checkHouse(house)
        checkPostCode(postcode)
    }

    const checkExpressDel = (email, phone, country, city, streen, house) => {
        checkEmail(email)
        checkPhone(phone)
        checkCountry(country)
        checkCity(city)
        checkStreet(streen)
        checkHouse(house)
    }

    const checkStoreDel = (email, phone, storeAdress) => {
        checkEmail(email)
        checkPhone(phone)
        checkStoreAdress(storeAdress)
    }

    const handleViewCartClick = () => {
        if (isPayment) {
            setIsPayment(false)
            setIsDelivery(true)
        } else if (isDelivery) {
            setIsItemInCart(true)
            setIsDelivery(false)
        } else {
            setIsItemInCart(true)
            dispatch(clearErrors())
            clearLocalStorage()
        }
    }

    const checkEmail = (email) => {
        const order = JSON.parse(localStorage.getItem('order'))
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
        if (pattern.test(email)) {
            order.email = email;
            localStorage.setItem("order", JSON.stringify(order))
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    }

    const checkPhone = (phone) => {
        const order = JSON.parse(localStorage.getItem('order'))
        const pattern = new RegExp(/(\+?375 \((25|29|33|44)\) ([0-9]{3}( [0-9]{2}){2}))/)
        if (pattern.test(phone)) {
            setPhoneError(false)
            order.phone = phone;
            localStorage.setItem("order", JSON.stringify(order))
        } else {
            setPhoneError(true)
        }
    };

    const checkCountry = (country) => {
        if (!country) {
            setErrorCountry(true)
        } else {
            setErrorCountry(false)
        }
    }
    const checkCity = (city) => {
        if (!city) {
            setErrorCity(true)
        } else {
            setErrorCity(false)
        }
    }
    const checkStreet = (street) => {
        if (!street) {
            setErrorStreet(true)
        } else {
            setErrorStreet(false)
        }
    }
    const checkHouse = (house) => {
        if (!house) {
            setErrorHouse(true)
        } else {
            setErrorHouse(false)
        }
    }

    const checkPostCode = (postCode) => {
        if (postCode?.length >= 9) {
            setPostCodeError(false)
        } else {
            setPostCodeError(true)
        }
    }

    const checkStoreAdress = (storeAdress) => {
        if (storeAdress && citiesSelect?.find(item => item.city === storeAdress)) {
            setStoreAdressError(false)
        } else {
            setStoreAdressError(true)
        }
    }


    const checkCreditCardNumber = (card) => {
        let cardNumber = card.split('-').join('')
        cardNumber.length === 16 ? setCardNumberError(false) : setCardNumberError(true)
    }

    const checkCreditCardDate = (cardDate) => {
        const pattern = new RegExp(/(0[1-9])|(1[012])/)
        const month = cardDate?.split('/')[0]
        const year = cardDate?.split('/')[1]
        const currentYear = parseInt(new Date().getFullYear().toString().substr(2, 2))
        const currentMonth = parseInt(new Date().getMonth())
        const compare = currentYear < +year ? true : currentYear === +year ? currentMonth < +month ? true : false : false
        if (pattern.test(month) && compare) {
            setCardDateError(false)
        } else {
            setCardDateError(true)
        }
    }

    const checkCardCVV = (cardCVV) => {
        cardCVV?.length >= 3 && cardCVV?.length <= 4 ? setCardCVVError(false) : setCardCVVError(true)
    }

    const chechCardMethods = (card, cardDate, cardCVV) => {
        checkCreditCardNumber(card)
        checkCreditCardDate(cardDate)
        checkCardCVV(cardCVV)
    }

    const checkEmailPayment = (cashEmail) => {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
        if (pattern.test(cashEmail)) {
            setPaymentEmailError(false);
        } else {
            setPaymentEmailError(true);
        }
    }

    const checkAgreeRules = () => {
        if (agree) {
            setRulesAgreeError(true)
            setAgree(false)
        } else {
            setRulesAgreeError(true)
        }
    }

    const changleAgreeHandler = () => {
        setAgree(!agree)
        setRulesAgreeError(false)
    }

    return (
        <>
            <div className="overlay" onClick={(event) => closeCartOnClick(event)}>
                <div className="drawer" ref={ref} data-test-id='cart' >
                    <h2 className="drawer-header">Shopping Cart
                        <img src={close} alt="remove" onClick={handleCartClose} />
                    </h2>
                    {items.length > 0 ?
                        <>
                            <div className="cart-items">
                                {isOrderError || orderResponse ? null :
                                    <div className="cart-stages">
                                        <div className={isItemInCart ? "active" : null}> Item in Cart </div> &frasl;
                                        <div className={isDelivery ? "active" : null}> Delivery Info </div> &frasl;
                                        <div className={isPayment ? "active" : null}> Payment </div>
                                    </div>
                                }

                                {isItemInCart && <CartProducts />}
                                {isDelivery && <Delivery
                                    phoneError={phoneError}
                                    emailError={emailError}
                                    errorCountry={errorCountry}
                                    errorCity={errorCity}
                                    errorStreet={errorStreet}
                                    errorHouse={errorHouse}
                                    postCodeError={postCodeError}
                                    storeAdressError={storeAdressError}
                                    setPhoneError={setPhoneError}
                                    setEmailError={setEmailError}
                                    setErrorCountry={setErrorCountry}
                                    setErrorCity={setErrorCity}
                                    setErrorStreet={setErrorStreet}
                                    setErrorHouse={setErrorHouse}
                                    setPostCodeError={setPostCodeError}
                                    setStoreAdressError={setStoreAdressError}
                                    rulesAgreeError={rulesAgreeError}
                                    setRulesAgreeError={setRulesAgreeError}
                                    checkAgreeRules={checkAgreeRules}
                                    agree={agree}
                                    setAgree={setAgree}
                                    changleAgreeHandler={changleAgreeHandler}
                                />}
                                {isPayment && <Payment
                                    setCardNumberError={setCardNumberError}
                                    setCardDateError={setCardDateError}
                                    setCardCVVError={setCardCVVError}
                                    cardNumberError={cardNumberError}
                                    cardDateError={cardDateError}
                                    cardCVVError={cardCVVError}
                                    paymentEmailError={paymentEmailError}
                                    setPaymentEmailError={setPaymentEmailError}
                                    setPaymentMethod={setPaymentMethod}
                                />}
                                {isOrderError && <ErrorOrder />}
                                {orderResponse && <SuccsessOrder handleCartClose={handleCartClose} />}
                            </div>
                            <div className="cartTotalBLock">
                                {isOrderError || orderResponse ?
                                    null
                                    :
                                    <ul className='cartTotalBLock'>
                                        <li>
                                            <span>Total:</span>
                                            <div></div>
                                            <b>{totalPrice}</b>
                                        </li>
                                    </ul>
                                }
                                {orderResponse ? null :
                                    <div className="control">
                                        <button className='blackButton' onClick={handleFurtherClick}>
                                            {isItemInCart ? 'Further' : isDelivery ? 'Further' : isPayment ? paymentMethod === 'cash' ? 'Ready' : 'Check out' : 'Back to payment'}
                                        </button>
                                        {!isItemInCart && <button className='blackButton' onClick={handleViewCartClick}>View Cart</button>}

                                    </div>
                                }

                            </div>
                        </>
                        :
                        <div className="cartEmpty">
                            <h2>Sorry, your cart is empty</h2>
                            <button className="blackButton" onClick={handleCartClose}> back to shopping </button>
                        </div>
                    }
                </div>
            </div >
        </>
    )
}