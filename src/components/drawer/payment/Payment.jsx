import { useState, useEffect } from 'react'
import visa from './assets/visa_payment.svg'
import master from './assets/mastercard_payment.svg'
import paypal from './assets/paypal_payment.svg'
import { PaypalMethod } from './paypal-method/paypal-method'
import { CardsMethod } from './cards-method/cards-method'

import './payment.scss'
export const Payment = ({
    setCardNumberError,
    setCardDateError,
    setCardCVVError,
    cardNumberError,
    cardDateError,
    cardCVVError,
    paymentEmailError,
    setPaymentEmailError,
    setPaymentMethod
}) => {
    const [selectedOption, setSelectedOption] = useState('visa')

    const handleOptionChange = (changeEvent) => {
        setSelectedOption(changeEvent.target.value)
    }

    useEffect(() => {
        if (selectedOption === 'visa' || selectedOption === 'master') {
            localStorage.setItem("paymentMethod", JSON.stringify('card'))
            setPaymentMethod(JSON.parse(localStorage.getItem('paymentMethod')))
        } else if (selectedOption === 'paypal') {
            localStorage.setItem("paymentMethod", JSON.stringify('paypal'))
            setPaymentMethod(JSON.parse(localStorage.getItem('paymentMethod')))
        } else {
            localStorage.setItem("paymentMethod", JSON.stringify('cash'))
            setPaymentMethod(JSON.parse(localStorage.getItem('paymentMethod')))
        }
    }, [selectedOption, setPaymentMethod])

    return (
        <>
            <form>
                <div className="radio">
                    <label>
                        <input type="radio" value="paypal" checked={selectedOption === 'paypal'} onChange={handleOptionChange} />
                        <img src={paypal} alt='paypal' />
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="visa" checked={selectedOption === 'visa'} onChange={handleOptionChange} />
                        <img src={visa} alt='visa' />
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="master" checked={selectedOption === 'master'} onChange={handleOptionChange} />
                        <img src={master} alt='master' />
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="cash" checked={selectedOption === 'cash'} onChange={handleOptionChange} />
                        Cash
                    </label>
                </div>
            </form>
            {selectedOption === 'visa' || selectedOption === 'master' ?
                < CardsMethod
                    setCardNumberError={setCardNumberError}
                    setCardDateError={setCardDateError}
                    setCardCVVError={setCardCVVError}
                    cardNumberError={cardNumberError}
                    cardDateError={cardDateError}
                    cardCVVError={cardCVVError}
                />
                :
                selectedOption === 'paypal' ?
                    < PaypalMethod
                        paymentEmailError={paymentEmailError}
                        setPaymentEmailError={setPaymentEmailError}
                    />
                    :
                    null}
        </>
    )
}