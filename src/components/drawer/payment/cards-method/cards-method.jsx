import { useEffect, useState } from "react"
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

    const objCardInfo = JSON.parse(localStorage.getItem('cardInfo'))
    const [cardNumber, setCardNumber] = useState(objCardInfo?.cardNumber)
    const [cardDate, setCardDate] = useState(objCardInfo?.cardDate)
    const [cardCVV, setCardCVV] = useState(objCardInfo?.cardCVV)
    const [isRevealCVV, setIsRevealCVV] = useState(false)

    useEffect(() => {
        localStorage.setItem('cardInfo', JSON.stringify({
            "cardNumber": cardNumber,
            "cardDate": cardDate,
            "cardCVV": cardCVV,
        }))
    }, [cardNumber, cardDate, cardCVV, objCardInfo])

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
        localStorage.setItem('cardInfo', JSON.stringify({
            ...JSON.parse(localStorage.getItem('cardInfo')),
            cardNumber
        }))
        let card = cardNumber.split('-').join('')
        card.length === 16 ? setCardNumberError(false) : setCardNumberError(true)
    }

    const checkCreditCardDate = () => {
        localStorage.setItem('cardInfo', JSON.stringify({
            ...JSON.parse(localStorage.getItem('cardInfo')),
            cardDate
        }))
        const [month, year] = cardDate.split('/')
        const currentYear = parseInt(new Date().getFullYear().toString().substr(2, 2))
        const currentMonth = parseInt(new Date().getMonth())
        const compare = currentYear < +year ? true : currentYear === +year ? currentMonth < +month ? true : false : false
        PATTERN_MONTH.test(month) && compare ? setCardDateError(false) : setCardDateError(true)
    }

    const checkCardCVV = () => {
        localStorage.setItem('cardInfo', JSON.stringify({
            ...JSON.parse(localStorage.getItem('cardInfo')),
            cardCVV
        }))
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