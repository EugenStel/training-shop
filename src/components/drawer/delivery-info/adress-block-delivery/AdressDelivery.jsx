import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getCountries } from '../../../../redux/order/orderSelectors'
import './adress-delivery.scss'
export const AdressDelivery = ({
    errorHouse,
    errorStreet,
    errorCity,
    errorCountry,
    setErrorCountry,
    setErrorCity,
    setErrorStreet,
    setErrorHouse }) => {

    const [country, setCountry] = useState(JSON.parse(localStorage.getItem('country')))
    const [city, setCity] = useState(JSON.parse(localStorage.getItem('city')))
    const [street, setStreet] = useState(JSON.parse(localStorage.getItem('street')))
    const [house, setHouse] = useState(JSON.parse(localStorage.getItem('house')))
    const countriesSelect = useSelector(getCountries)

    const changeCountryHandler = ({ target: { value } }) => {
        setCountry(value)
    }
    const changeCityHandler = ({ target: { value } }) => {
        setCity(value)
    }
    const changeStreetHandler = ({ target: { value } }) => {
        setStreet(value)
    }
    const changeHouseHandler = ({ target: { value } }) => {
        setHouse(value)
    }

    const checkInputs = (inputValue, inputType) => {
        if (!inputValue) {
            switch (inputType) {
                case 'country':
                    setErrorCountry(true)
                    localStorage.setItem("country", JSON.stringify(inputValue))
                    break
                case 'city':
                    setErrorCity(true)
                    localStorage.setItem("city", JSON.stringify(inputValue))
                    break
                case 'street':
                    setErrorStreet(true)
                    localStorage.setItem("street", JSON.stringify(inputValue))
                    break
                case 'house':
                    setErrorHouse(true)
                    localStorage.setItem("house", JSON.stringify(inputValue))
                    break
                default:
                    break
            }
        } else {
            switch (inputType) {
                case 'country':
                    if (country.toLowerCase() === 'Беларусь'.toLowerCase()) {
                        setErrorCountry(false)
                        localStorage.setItem("country", JSON.stringify(country))
                    } else {
                        setErrorCountry(true)
                        localStorage.setItem("country", JSON.stringify(country))
                    }
                    break
                case 'city':
                    setErrorCity(false)
                    localStorage.setItem("city", JSON.stringify(inputValue))
                    break
                case 'street':
                    setErrorStreet(false)
                    localStorage.setItem("street", JSON.stringify(inputValue))
                    break
                case 'house':
                    setErrorHouse(false)
                    localStorage.setItem("house", JSON.stringify(inputValue))
                    break
                default:
                    break
            }
        }
    }

    const keyUpCountryHandler = () => {
        if (country.toLowerCase() === 'Беларусь'.toLowerCase()) {
            setErrorCountry(false)
            localStorage.setItem("country", JSON.stringify(country))
        } else {
            setErrorCountry(true)
            localStorage.setItem("country", JSON.stringify(country))
        }
    }

    return (
        <div className="adress-block-delivery">
            <div className="adress-country ">
                <h2>Country</h2>
                <input
                    type="text"
                    name="country"
                    list='countries'
                    placeholder="Country"
                    className="input-delivery"
                    value={country}
                    onChange={changeCountryHandler}
                    onBlur={() => checkInputs(country, 'country')}
                    onKeyUp={keyUpCountryHandler}
                />
                <datalist id="countries">
                    <option key={countriesSelect[0]?._id}>{countriesSelect[0]?.name}</option>
                </datalist>
                {errorCountry && <div className="errors">Поле должно быть заполнено</div>}
                {errorCountry && <div className="errors">Доставка доступна только по РБ</div>}
            </div>
            <div className="adress-city">
                <h2>City</h2>
                <input
                    type="text"
                    name='city'
                    placeholder="City"
                    className='input-delivery'
                    onChange={changeCityHandler}
                    value={city}
                    disabled={country === '' ? true : false}
                    onBlur={() => checkInputs(city, 'city')}
                />
                {errorCity && <div className="errors">Поле должно быть заполнено</div>}
            </div>
            <div className="adress-street">
                <h2>Street</h2>
                <input type="text" name='street'
                    placeholder="Street"
                    className='input-delivery'
                    onChange={changeStreetHandler}
                    value={street}
                    onBlur={() => checkInputs(street, 'street')}
                />
                {errorStreet && <div className="errors">Поле должно быть заполнено</div>}
            </div>
            <div className="house-info">
                <div className="adress-house">
                    <h2>House</h2>
                    <input
                        type="text"
                        name='house'
                        placeholder="House"
                        className='input-delivery'
                        onChange={changeHouseHandler}
                        value={house}
                        onBlur={() => checkInputs(house, 'house')}
                    />
                    {errorHouse && <div className="errors">Поле должно быть заполнено</div>}
                </div>
                <div className="adress-appartment">
                    <h2>Apartment</h2>
                    <input
                        type="text"
                        placeholder="Apartment"
                        name='appartment'
                        className='input-delivery' />
                </div>
            </div>
        </div>
    )
}