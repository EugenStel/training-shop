import { useEffect, useState } from 'react'
import MaskInput from "react-maskinput";
import { AdressDelivery } from './adress-block-delivery/AdressDelivery'
import { PostcodeDelivery } from './post-code-delivery/PostDelivery'
import { StoreDelivery } from './store-delivery/StoreDelivery'
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
    setRulesAgreeError,
    checkAgreeRules,
    agree,
    setAgree,
    changleAgreeHandler }) => {

    const [chosedDelivery, setChosedDelivery] = useState('office')

    const [phone, setPhone] = useState(JSON.parse(localStorage.getItem('phone')))
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem('email')))

    const handleOptionChange = ({ target }) => {
        setChosedDelivery(target.value)
    }

    useEffect(() => {
        if (chosedDelivery === 'office') {
            let deliveryMethod = 'pickup from post offices'
            localStorage.setItem("deliveryMethod", JSON.stringify(deliveryMethod))
        } else if (chosedDelivery === 'express') {
            let deliveryMethod = 'express delivery'
            localStorage.setItem("deliveryMethod", JSON.stringify(deliveryMethod))
        } else {
            let deliveryMethod = 'store pickup'
            localStorage.setItem("deliveryMethod", JSON.stringify(deliveryMethod))
        }
    }, [chosedDelivery])

    const changePhonehandler = ({ target }) => {
        setPhone(target.value)
    }

    const changeEmailhandler = ({ target }) => {
        setEmail(target.value)
    }

    const checkEmail = () => {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
        if (pattern.test(email)) {
            setEmailError(false);
            localStorage.setItem("email", JSON.stringify(email))
        } else {
            setEmailError(true);
            localStorage.setItem("email", JSON.stringify(email))
        }
    }

    const checkPhone = () => {
        const pattern = new RegExp(/(\+?375 \((25|29|33|44)\) ([0-9]{3}( [0-9]{2}){2}))/)
        if (pattern.test(phone)) {
            setPhoneError(false)
            localStorage.setItem("phone", JSON.stringify(phone))
        } else {
            setPhoneError(true)
            localStorage.setItem("phone", JSON.stringify(phone))
        }
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
                        {phoneError && <div className='errors'><span>Поле должно быть заполнено</span></div>}
                    </label>
                </div>
                <div className='delivery-email'>
                    <label htmlFor="">E-mail
                        <input type="text" placeholder='e-mail' name='email' required className='input-delivery' onChange={changeEmailhandler} value={email}
                            onBlur={checkEmail} />
                        {emailError && <div className="errors"><span>Поле должно быть заполнено</span></div>}
                    </label>

                </div>
                {chosedDelivery === 'office' || chosedDelivery === 'express' ?
                    < AdressDelivery
                        errorHouse={errorHouse}
                        errorStreet={errorStreet}
                        errorCity={errorCity}
                        errorCountry={errorCountry}
                        setErrorCountry={setErrorCountry}
                        setErrorCity={setErrorCity}
                        setErrorStreet={setErrorStreet}
                        setErrorHouse={setErrorHouse}
                    /> :
                    null}
                {chosedDelivery === 'office' ?
                    < PostcodeDelivery
                        postCodeError={postCodeError}
                        setPostCodeError={setPostCodeError}
                    /> :
                    null}
                {chosedDelivery === 'store' ?
                    < StoreDelivery
                        storeAdressError={storeAdressError}
                        setStoreAdressError={setStoreAdressError}
                        errorCountry={errorCountry}
                        setErrorCountry={setErrorCountry}
                    /> :
                    null}
                <div className="delivery-agree">
                    <input type="checkbox" id="agree" name="agree" onChange={changleAgreeHandler} checked={agree} />
                    <label htmlFor="agree">I agree to the processing of my personal information</label>
                    {rulesAgreeError && <div className="errors"><span>Вы должны согласиться на обработку личной информации</span></div>}
                </div>
            </form>
        </>

    )
}