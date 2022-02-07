import { FooterSubscribe } from "./subscribe/Subscribe";
import { FooterNav } from "./navigation/Nav";
import { FooterCopy } from "./copyrighting/Copyrighting";

import './footer.scss'

export const Footer = () => {
    return (

        <div className='footer' data-test-id='footer'>
            <FooterSubscribe />
            <div className='wrapper'>
                <FooterNav />
            </div>
            <FooterCopy />
        </div>
    )
}