import { useState } from "react"
import iconEye from './assets/icon-Eye.svg'
import iconEyeSlash from './assets/icon-EyeSlash.svg'
import MaskInput from "react-maskinput";
import './cards-method.scss'

export const CardsMethod = ({
    setCardNumberError,
    setCardDateError,
    setCardCVVError,
    cardNumberError,
    cardDateError,
    cardCVVError
}) => {
    const [cardNumber, setCardNumber] = useState(JSON.parse(localStorage.getItem('card')))
    const [cardDate, setCardDate] = useState(JSON.parse(localStorage.getItem('cardDate')))
    const [cardCVV, setCardCVV] = useState(JSON.parse(localStorage.getItem('cardCVV')))
    const [isRevealCVV, setIsRevealCVV] = useState(false);

    const handleChangeCardNumber = ({ target }) => {
        setCardNumber(target.value)
    }

    const handleChangeCardDate = ({ target }) => {
        setCardDate(target.value)
    }

    const handleChangeCardCvv = ({ target }) => {
        setCardCVV(target.value)
    }

    const checkCreditCardNumber = () => {
        let card = cardNumber.split('-').join('')
        if (card.length === 16) {
            setCardNumberError(false)
            localStorage.setItem("card", JSON.stringify(cardNumber))
        } else {
            setCardNumberError(true)
            localStorage.setItem("card", JSON.stringify(cardNumber))
        }
    }

    const checkCreditCardDate = () => {
        const pattern = new RegExp(/(0[1-9])|(1[012])/)
        const month = cardDate.split('/')[0]
        const year = cardDate.split('/')[1]
        const currentYear = parseInt(new Date().getFullYear().toString().substr(2, 2))
        const currentMonth = parseInt(new Date().getMonth())
        const compareYear = currentYear <= +year ? true : false
        const compareMonth = currentMonth < +month ? true : false
        if (pattern.test(month) && compareYear && compareMonth) {
            setCardDateError(false)
            localStorage.setItem("cardDate", JSON.stringify(cardDate))
        } else {
            setCardDateError(true)
            localStorage.setItem("cardDate", JSON.stringify(cardDate))
        }
    }

    const checkCardCVV = () => {
        if (cardCVV.length >= 3 && cardCVV.length <= 4) {
            setCardCVVError(false)
            localStorage.setItem("cardCVV", JSON.stringify(cardCVV))
        } else {
            setCardCVVError(true)
            localStorage.setItem("cardCVV", JSON.stringify(cardCVV))
        }
    }

    return (
        <>
            <div className="cards-payment">
                <h2>Card</h2>
                <MaskInput
                    type="text"
                    className='input-card-number'
                    placeholder="---- ---- ---- ----"
                    name="card"
                    value={cardNumber}
                    onBlur={checkCreditCardNumber}
                    onChange={handleChangeCardNumber}
                    mask="0000-0000-0000-0000"
                />
                {cardNumberError && <div className='errors'><span>Проверьте правильность введенных данных</span></div>}
                <div className="card-info">
                    <MaskInput
                        type="text"
                        className='input-card-date'
                        placeholder="MM/YY"
                        name="cardDate"
                        value={cardDate}
                        onChange={handleChangeCardDate}
                        onBlur={checkCreditCardDate}
                        mask="00/00"
                    />
                    {cardDateError && <div className='errors'><span>Enter correct year or month</span></div>}
                    <div className="cvv-wrapper">
                        <MaskInput
                            type={isRevealCVV ? "text" : "password"}
                            className='input-card-cvv'
                            placeholder='CVV'
                            name="cardCVV"
                            value={cardCVV}
                            onChange={handleChangeCardCvv}
                            onBlur={checkCardCVV}
                            mask="0000"
                        />
                        {cardCVVError && <div className='errors'><span>Too short</span></div>}
                        <img
                            title={isRevealCVV ? "Hide password" : "Show password"}
                            src={isRevealCVV ? iconEyeSlash : iconEye}
                            alt="show_hide_icon"
                            onClick={() => setIsRevealCVV(prevState => !prevState)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}