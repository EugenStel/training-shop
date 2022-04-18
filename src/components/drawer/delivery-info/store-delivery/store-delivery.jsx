import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCities, fetchCountries } from '../../../../redux/order/orderActions'
import { getCountries, getCities } from '../../../../redux/order/orderSelectors'
import './store.delivery.scss'

export const StoreDelivery = ({ storeAdressError, setStoreAdressError, errorCountry, setErrorCountry }) => {


    const objAddress = JSON.parse(localStorage.getItem('addressInfo'))
    const [country, setCountry] = useState(objAddress?.country)
    const [storeAdress, setStoreAdress] = useState(JSON.parse(localStorage.getItem('storeAdress')))
    const dispatch = useDispatch()
    const countriesSelect = useSelector(getCountries)
    const citiesSelect = useSelector(getCities)

    useEffect(() => {
        dispatch(fetchCountries())
    }, [dispatch])

    useEffect(() => {
        if (storeAdress.length >= 3) {
            dispatch(fetchCities(storeAdress, country))
        }
    }, [country, storeAdress.length, storeAdress, dispatch])

    const changeCountryHandler = ({ target: { value } }) => {
        setCountry(value)
        setStoreAdress('')
    }

    const changeStoreAdressHandler = ({ target: { value } }) => {
        setStoreAdress(value)
    }

    const checkCountry = () => {
        localStorage.setItem('addressInfo', JSON.stringify({
            ...JSON.parse(localStorage.getItem('addressInfo')),
            'country': country
        }))
        !country ? setErrorCountry(true) : setErrorCountry(false)
    }

    const checkStoreAdress = () => {
        localStorage.setItem("storeAdress", JSON.stringify(storeAdress))
        storeAdress && citiesSelect.find(item => item.city === storeAdress) ? setStoreAdressError(false) : setStoreAdressError(true)
    }

    return (
        <div className="delivery-store">
            <label htmlFor="">
                Address of store
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
                    {countriesSelect?.map(({ name, _id }) => (
                        <option key={_id}>{name}</option>
                    )
                    )}
                </datalist>
                {errorCountry && <div className='errors'>Поле должно быть заполнено</div>}
                <input
                    type="text"
                    list='stores'
                    placeholder="Store address"
                    className="input-delivery"
                    disabled={country === '' ? true : false}
                    value={storeAdress}
                    onBlur={checkStoreAdress}
                    onChange={changeStoreAdressHandler}
                />
                {
                    storeAdress.length >= 3 &&
                    <datalist id="stores">
                        {citiesSelect?.map(({ city, _id }) => (
                            <option key={_id}>{city}</option>
                        )
                        )}
                    </datalist>
                }
                {storeAdressError && <div className='errors'>Поле должно быть заполнено</div>}
            </label>
        </div>
    )
}