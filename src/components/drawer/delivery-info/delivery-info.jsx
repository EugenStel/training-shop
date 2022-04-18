import { useEffect, useState } from 'react'
import MaskInput from "react-maskinput"
import { AdressDelivery } from './adress-block-delivery/adress-delivery'
import { PostcodeDelivery } from './post-code-delivery/post-delivery'
import { StoreDelivery } from './store-delivery/store-delivery'
import { PATTERN_EMAIL, PATTERN_PHONE } from '../../../constants/order/patterns'
import { DELIVERY_VALUES } from '../../../constants/order/forms-data'
import './delivery-info.scss'

export const Delivery = ({
    emailError,
    phoneError,
    errorHouse,
    errorStreet,
    errorCity,
    errorCountry,
    postCodeError,
    storeAdressError,
    setPhoneError,
    setEmailError,
    setErrorCountry,
    setErrorCity,
    setErrorStreet,
    setErrorHouse,
    setPostCodeError,
    setStoreAdressError,
    rulesAgreeError,
    agree,
    changleAgreeHandler }) => {

    const [chosedDelivery, setChosedDelivery] = useState('office')

    const [phone, setPhone] = useState(JSON.parse(localStorage.getItem('phone')))
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem('email')))

    const handleOptionChange = ({ target }) => {
        setChosedDelivery(target.value)
    }

    useEffect(() => {
        if (chosedDelivery === 'office') {
            localStorage.setItem("deliveryMethod", JSON.stringify(DELIVERY_VALUES.POST_DELIVERY))
        } else if (chosedDelivery === 'express') {
            localStorage.setItem("deliveryMethod", JSON.stringify(DELIVERY_VALUES.EXPRESS_DELIVERY))
        } else {
            localStorage.setItem("deliveryMethod", JSON.stringify(DELIVERY_VALUES.STORE_PICKUP))
        }
    }, [chosedDelivery])

    const changePhonehandler = ({ target }) => {
        setPhone(target.value)
    }

    const changeEmailhandler = ({ target }) => {
        setEmail(target.value)
    }

    const checkEmail = () => {
        localStorage.setItem("email", JSON.stringify(email))
        PATTERN_EMAIL.test(email) ? setEmailError(false) : setEmailError(true)
    }

    const checkPhone = () => {
        localStorage.setItem("phone", JSON.stringify(phone))
        PATTERN_PHONE.test(phone) ? setPhoneError(false) : setPhoneError(true)
    };

    return (
        <>
            <h1>Choose the method of delivery of the items</h1>
            <form>
                <div className="radio">
                    <label>
                        <input type="radio" value="office" checked={chosedDelivery === 'office'} onChange={handleOptionChange} />
                        Pickup from post offices
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="express" checked={chosedDelivery === 'express'} onChange={handleOptionChange} />
                        Express delivery
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="store" checked={chosedDelivery === 'store'} onChange={handleOptionChange} />
                        Store pickup
                    </label>
                </div>
                <div className='delivery-phone'>
                    <label htmlFor="">Phone
                        <MaskInput
                            type="tel"
                            className='input-delivery'
                            placeholder="+375 (_ _) _ _ _ _ _ _ _ "
                            name="phone"
                            value={phone}
                            onBlur={checkPhone}
                            onChange={changePhonehandler}
                            mask="+375 (00) 000 00 00"
                        />
                        {phoneError && <div className='errors'>Поле должно быть заполнено</div>}
                    </label>
                </div>
                <div className='delivery-email'>
                    <label htmlFor="">E-mail
                        <input type="text" placeholder='e-mail' name='email' required className='input-delivery' onChange={changeEmailhandler} value={email}
                            onBlur={checkEmail} />
                        {emailError && <div className="errors">Поле должно быть заполнено</div>}
                    </label>

                </div>
                {(chosedDelivery === 'office' || chosedDelivery === 'express') &&
                    < AdressDelivery
                        errorHouse={errorHouse}
                        errorStreet={errorStreet}
                        errorCity={errorCity}
                        errorCountry={errorCountry}
                        setErrorCountry={setErrorCountry}
                        setErrorCity={setErrorCity}
                        setErrorStreet={setErrorStreet}
                        setErrorHouse={setErrorHouse}
                    />}
                {chosedDelivery === 'office' &&
                    < PostcodeDelivery
                        postCodeError={postCodeError}
                        setPostCodeError={setPostCodeError}
                    />}
                {chosedDelivery === 'store' &&
                    < StoreDelivery
                        storeAdressError={storeAdressError}
                        setStoreAdressError={setStoreAdressError}
                        errorCountry={errorCountry}
                        setErrorCountry={setErrorCountry}
                    />}
                <div className="delivery-agree">
                    <input type="checkbox" id="agree" name="agree" onChange={changleAgreeHandler} checked={agree} />
                    <label htmlFor="agree">I agree to the processing of my personal information</label>
                    {rulesAgreeError && <div className="errors">Вы должны согласиться на обработку личной информации</div>}
                </div>
            </form>
        </>

    )
}