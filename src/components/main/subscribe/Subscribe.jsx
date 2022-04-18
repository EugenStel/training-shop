import { useEffect, useState } from 'react';
import men from './assets/menSubscibe.svg';
import woman from './assets/womenSubscribe.png';
import { sendMainEmail, enableMainButton, disableMainButton, clear } from '../../../redux/email/emailActions';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderButtons } from '../../loader-buttons/loader-buttons'
import { getEmailMainLoading, getEmailMainError, getEmailMainResponce, getButtonMainStatus } from '../../../redux/email/emailSelectors'

import './subscribe.scss';


export const MainSubscribe = () => {
    const [email, setEmail] = useState('')
    const [emailValidMessage, setEmailValidMessage] = useState(false)
    const dispatch = useDispatch()
    const loading = useSelector(getEmailMainLoading)
    const errorMail = useSelector(getEmailMainError)
    const emailResponce = useSelector(getEmailMainResponce)
    const buttonDisable = useSelector(getButtonMainStatus)

    const handleInputChange = (e) => {
        setEmail(e.target.value)
    }


    function isValidEmailAddress(emailAddress) {
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (pattern.test(emailAddress)) {
            dispatch(enableMainButton())
            setEmailValidMessage(false)
        } else if (!email.length) {
            setEmailValidMessage(false)
        } else {
            setEmailValidMessage(true)
            dispatch(disableMainButton())
        }
    }


    const handleSubmit = (e, email) => {
        e.preventDefault();
        dispatch(disableMainButton())
        dispatch(sendMainEmail(email))
    }


    useEffect(() => {
        if (emailResponce) {
            setEmail('')
        }
    }, [emailResponce])


    useEffect(() => {
        dispatch(clear())
    }, [dispatch])

    return (
        <div className='subscribe'>
            <div className='subscribe_block'>
                <div className='small_block'>
                    <div className='title'>SPECIAL OFFER</div>
                    <span className='subtitle'>
                        SUBSCRIBE <br /> AND <span className='percent'>GET 10% OFF</span>
                    </span>
                    <form onSubmit={(e) => handleSubmit(e, email)}>

                        <input type='text'
                            data-test-id='main-subscribe-mail-field'
                            placeholder='Enter your email'
                            className='input'
                            value={email}
                            onChange={handleInputChange}
                            onKeyUp={() => { isValidEmailAddress(email) }} />
                        {emailValidMessage && <p>Некорректный email</p>}
                        {errorMail ? <p className='error_mail'>{errorMail}</p> : <p className='success_email'>{emailResponce}</p>}
                        <button className={`button ${buttonDisable}`} type='submit' disabled={buttonDisable} data-test-id='main-subscribe-mail-button'>
                            {loading && <LoaderButtons />}SUBSCRIBE
                        </button>
                    </form>
                </div>
                <img src={woman} alt='woman' className='woman' />
                <img src={men} alt='men' className='men' />
            </div>
        </div >
    )
}
