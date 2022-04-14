import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCities, fetchCountries } from '../../../../redux/order/orderActions'
import { getCountries, getCities } from '../../../../redux/order/orderSelectors'
import './store.delivery.scss'


export const StoreDelivery = ({ storeAdressError, setStoreAdressError, errorCountry, setErrorCountry }) => {

    const [country, setCountry] = useState(JSON.parse(localStorage.getItem('country')))
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
        if (!country) {
            setErrorCountry(true)
            localStorage.setItem("country", JSON.stringify(country))
        } else {
            setErrorCountry(false)
            localStorage.setItem("country", JSON.stringify(country))
        }
    }

    const checkStoreAdress = () => {
        if (storeAdress && citiesSelect.find(item => item.city === storeAdress)) {
            setStoreAdressError(false)
            localStorage.setItem("storeAdress", JSON.stringify(storeAdress))
        } else {
            setStoreAdressError(true)
            localStorage.setItem("storeAdress", JSON.stringify(storeAdress))
        }
    }

    return (
        <div className="delivery-store">
            <label htmlFor="">
                Address of store
                <select name="country" id="" className='input-delivery' onChange={changeCountryHandler} value={country} onBlur={checkCountry}>
                    <option value="" disabled hidden>Please choose country...</option>
                    {countriesSelect?.map(({ _id, name }) => {
                        return (
                            <option name={name} key={_id} >{name}</option>
                        )
                    })}
                </select>
                {errorCountry && <div className='errors'><span>Chose country and then enter store address</span></div>}
                <input
                    type="text"
                    list='stores'
                    placeholder="Enter store address"
                    className="input-delivery"
                    disabled={country === '' ? true : false}
                    value={storeAdress}
                    onBlur={checkStoreAdress}
                    onChange={changeStoreAdressHandler}
                />
                {
                    storeAdress.length >= 3 ?
                        <datalist id="stores">
                            {citiesSelect?.map(({ city, _id }) => {
                                return (
                                    <option key={_id}>{city}</option>
                                )
                            })}
                        </datalist> :
                        null
                }
                {storeAdressError && <div className='errors'><span>Chose store country and then enter store address</span></div>}
            </label>
        </div>
    )
}