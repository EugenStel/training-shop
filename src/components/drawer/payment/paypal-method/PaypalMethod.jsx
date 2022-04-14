import { useState } from "react"
import './paypal-method.scss'

export const PaypalMethod = ({ paymentEmailError, setPaymentEmailError }) => {
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem('cashEmail')))


    const handlerChange = ({ target }) => {
        setEmail(target.value)
    }

    const checkEmailPayment = () => {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
        if (pattern.test(email)) {
            setPaymentEmailError(false);
            localStorage.setItem("cashEmail", JSON.stringify(email))
        } else {
            setPaymentEmailError(true);
            localStorage.setItem("cashEmail", JSON.stringify(email))
        }
    }

    return (
        <div className="paypal-payment">
            <h2>E-mail</h2>
            <input type='text' placeholder='Enter your email' name="cashEmail" className='input' value={email} onChange={handlerChange} onBlur={checkEmailPayment} />
            {paymentEmailError && <div className="errors"><span>Enter you email correct</span></div>}
        </div>

    )
}