import { SocialIcons } from "../../header/social-networks/Social"

import './subscribe.scss'

export const FooterSubscribe = () => {
    return (
        <div className='footer_subscriber'>
            <div className='wrapper'>
                <span className='footer_text'>BE IN TOUCH WITH US:</span>
                <div className='footer_email'>
                    <input type='text' placeholder='Enter your email' className='footer_input' />
                    <button className='footer_button' type='button'>
                        JOIN US
                    </button>
                </div>
                <SocialIcons size='18px' />
            </div>
        </div>
    )
}