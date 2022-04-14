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

    const checkCountry = () => {
        if (!country) {
            setErrorCountry(true)
            localStorage.setItem("country", JSON.stringify(country))
        } else {
            setErrorCountry(false)
            localStorage.setItem("country", JSON.stringify(country))
        }
    }
    const checkCity = () => {
        if (!city) {
            setErrorCity(true)
            localStorage.setItem("city", JSON.stringify(city))
        } else {
            setErrorCity(false)
            localStorage.setItem("city", JSON.stringify(city))
        }
    }
    const checkStreet = () => {
        if (!street) {
            setErrorStreet(true)
            localStorage.setItem("street", JSON.stringify(street))
        } else {
            setErrorStreet(false)
            localStorage.setItem("street", JSON.stringify(street))
        }
    }
    const checkHouse = () => {
        if (!house) {
            setErrorHouse(true)
            localStorage.setItem("house", JSON.stringify(house))
        } else {
            setErrorHouse(false)
            localStorage.setItem("house", JSON.stringify(house))
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
                    onBlur={checkCountry}
                    onChange={changeCountryHandler}
                />
                <datalist id="countries">
                    {countriesSelect?.map(({ name, _id }) => {
                        return (
                            <option key={_id}>{name}</option>
                        )
                    })}
                </datalist>
                {errorCountry && <div className="errors"><span>Поле должно быть заполнено</span></div>}
            </div>
            <div className="adress-city">
                <h2>City</h2>
                <input type="text"
                    name='city'
                    placeholder="City"
                    className='input-delivery'
                    onChange={changeCityHandler}
                    value={city}
                    disabled={country === '' ? true : false}
                    onBlur={checkCity}
                />
                {errorCity && <div className="errors"><span>Поле должно быть заполнено</span></div>}
            </div>
            <div className="adress-street">
                <h2>Street</h2>
                <input type="text" name='street' placeholder="Street" className='input-delivery' onChange={changeStreetHandler} value={street}
                    onBlur={checkStreet}
                />
                {errorStreet && <div className="errors"><span>Поле должно быть заполнено</span></div>}
            </div>
            <div className="house-info">
                <div className="adress-house">
                    <h2>House</h2>
                    <input type="text" name='house' placeholder="House" className='input-delivery' onChange={changeHouseHandler} value={house}
                        onBlur={checkHouse}
                    />
                    {errorHouse && <div className="errors"><span>Поле должно быть заполнено</span></div>}
                </div>
                <div className="adress-appartment">
                    <h2>Apartment</h2>
                    <input type="text" placeholder="Apartment" name='appartment' className='input-delivery' />
                </div>
            </div>
        </div>
    )
}