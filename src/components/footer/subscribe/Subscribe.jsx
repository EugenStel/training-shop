import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmailFooterLoading, getEmailFooterError, getEmailFooterResponce } from "../../../redux/email/emailSelectors";
import { getButtonFooterStatus } from "../../../redux/email/emailSelectors";
import { LoaderFooterButtons } from "../../loader-buttons/loader-buttons";
import { SocialIcons } from "../../header/social-networks/social"
import { sendFooterEmail, enableFooterButton, disableFooterButton, clear } from "../../../redux/email/emailActions";

import './subscribe.scss'

export const FooterSubscribe = () => {
    const [email, setEmail] = useState('')
    const [emailValidMessage, setEmailValidMessage] = useState(false)
    const dispatch = useDispatch()
    const loading = useSelector(getEmailFooterLoading)
    const errorMail = useSelector(getEmailFooterError)
    const emailResponce = useSelector(getEmailFooterResponce)
    const buttonDisable = useSelector(getButtonFooterStatus)

    const location = useLocation();

    useEffect(() => {
        dispatch(clear())
    }, [dispatch, location]);

    useEffect(() => {
        if (emailResponce) {
            setEmail('')
        }
    }, [emailResponce])

    useEffect(() => {
        setEmail('')
    }, [location]);

    const handleInputChange = (e) => {
        setEmail(e.target.value)
    }

    function isValidEmailAddress(emailAddress) {
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (pattern.test(emailAddress)) {
            dispatch(enableFooterButton())
            setEmailValidMessage(false)
        } else if (!email.length) {
            setEmailValidMessage(false)
        } else {
            setEmailValidMessage(true)
            dispatch(disableFooterButton())
        }
    }

    const handleSubmit = (e, email) => {
        e.preventDefault();
        dispatch(disableFooterButton())
        dispatch(sendFooterEmail(email))
    }

    return (
        <div className='footer_subscriber'>
            <div className='wrapper'>
                <span className='footer_text'>BE IN TOUCH WITH US:</span>
                <div className='footer_email'>
                    <form onSubmit={(e) => handleSubmit(e, email)} className='footer_email'>
                        <input type='text'
                            data-test-id='footer-mail-field'
                            placeholder='Enter your email'
                            className='footer_input'
                            value={email}
                            onChange={handleInputChange}
                            onKeyUp={() => { isValidEmailAddress(email) }} />
                        <button className={`footer_button ${buttonDisable}`} type='submit' disabled={buttonDisable} data-test-id='footer-subscribe-mail-button'>
                            JOIN US
                        </button>
                    </form>
                    {loading && <LoaderFooterButtons />}
                    {emailValidMessage && <p className="error_email_valid">Некорректный email</p>}
                    {errorMail ? <p className='error_mail'>{errorMail}</p> : <p className='success_email'>{emailResponce}</p>}
                </div>
                <SocialIcons size='18px' />
            </div>
        </div>
    )
}