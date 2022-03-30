import { SocialIcons } from "../../header/social-networks/Social"
import { useState } from 'react';
import { getEmailFooterLoading, getEmailFooterError, getEmailFooterResponce } from "../../../redux/email/emailSelectors";
import { getButtonFooterStatus } from "../../../redux/email/emailSelectors";
import { useDispatch, useSelector } from 'react-redux';
import { LoaderFooterButtons } from "../../loader-buttons/LoaderButtons";
import { sendFooterEmail, enableFooterButton, disableFooterButton } from "../../../redux/email/emailActions";

import './subscribe.scss'

export const FooterSubscribe = () => {
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const loading = useSelector(getEmailFooterLoading)
    const errorMail = useSelector(getEmailFooterError)
    const emailResponce = useSelector(getEmailFooterResponce)
    const buttonDisable = useSelector(getButtonFooterStatus)

    const handleInputChange = (e) => {
        setEmail(e.target.value)
    }

    function isValidEmailAddress(emailAddress) {
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (pattern.test(emailAddress)) {
            dispatch(enableFooterButton())
        }
    }

    const handleSubmit = (e, email) => {
        e.preventDefault();
        dispatch(disableFooterButton())
        dispatch(sendFooterEmail(email))
        console.log('submiting')
        setEmail('')
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
                            onChange={handleInputChange}
                            onKeyUp={() => { isValidEmailAddress(email) }} />

                        <button className={`footer_button ${buttonDisable}`} type='submit' disabled={buttonDisable} data-test-id='footer-subscribe-mail-button'>
                            JOIN US
                        </button>
                    </form>
                    {loading && <LoaderFooterButtons />}
                    {errorMail ? <span className='error_mail'>{errorMail}</span> : <span className='success_email'>{emailResponce}</span>}
                </div>
                <SocialIcons size='18px' />
            </div>
        </div>
    )
}