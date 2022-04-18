import { useState } from "react"
import { PATTERN_EMAIL } from "../../../../constants/order/patterns"
import './paypal-method.scss'

export const PaypalMethod = ({ paymentEmailError, setPaymentEmailError }) => {
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem('cashEmail')))

    const handlerChange = ({ target }) => {
        setEmail(target.value)
    }

    const checkEmailPayment = () => {
        if (PATTERN_EMAIL.test(email)) {
            setPaymentEmailError(false)
            localStorage.setItem("cashEmail", JSON.stringify(email))
        } else {
            setPaymentEmailError(true)
            localStorage.setItem("cashEmail", JSON.stringify(email))
        }
    }

    return (
        <div className="paypal-payment">
            <h2>E-mail</h2>
            <input type='text'
                placeholder='e-mail'
                name="cashEmail"
                className='input'
                value={email}
                onChange={handlerChange}
                onBlur={checkEmailPayment} />
            {paymentEmailError && <div className="errors">Enter you email correct</div>}
        </div>

    )
}