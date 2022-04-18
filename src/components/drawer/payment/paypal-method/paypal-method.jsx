import { useState } from "react"
import { PATTERN_EMAIL } from "../../../../constants/order/patterns"
import './paypal-method.scss'

export const PaypalMethod = ({ paymentEmailError, setPaymentEmailError }) => {
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem('cashEmail')))

    const handlerChange = ({ target }) => {
        setEmail(target.value)
    }

    const checkEmailPayment = () => {
        localStorage.setItem("cashEmail", JSON.stringify(email))
        PATTERN_EMAIL.test(email) ? setPaymentEmailError(false) : setPaymentEmailError(true)
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