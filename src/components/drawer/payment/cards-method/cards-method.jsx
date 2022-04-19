import { useState } from "react"
import MaskInput from "react-maskinput";
import iconEye from './assets/icon-Eye.svg'
import iconEyeSlash from './assets/icon-EyeSlash.svg'
import { PATTERN_MONTH } from "../../../../constants/order/patterns";
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
    const [isRevealCVV, setIsRevealCVV] = useState(false)

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
        localStorage.setItem("card", JSON.stringify(cardNumber))
        card.length === 16 ? setCardNumberError(false) : setCardNumberError(true)
    }

    const checkCreditCardDate = () => {
        const [month, year] = cardDate.split('/')
        const currentYear = parseInt(new Date().getFullYear().toString().substr(2, 2))
        const currentMonth = parseInt(new Date().getMonth())
        const compare = currentYear < +year ? true : currentYear === +year ? currentMonth < +month ? true : false : false
        localStorage.setItem("cardDate", JSON.stringify(cardDate))
        PATTERN_MONTH.test(month) && compare ? setCardDateError(false) : setCardDateError(true)
    }

    const checkCardCVV = () => {
        localStorage.setItem("cardCVV", JSON.stringify(cardCVV))
        cardCVV.length >= 3 && cardCVV.length <= 4 ? setCardCVVError(false) : setCardCVVError(true)
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
                {cardNumberError && <div className='errors'>Проверьте правильность введенных данных</div>}
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
                    {cardDateError && <div className='errors'>Enter correct year or month</div>}
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
                        {cardCVVError && <div className='errors'>Too short</div>}
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