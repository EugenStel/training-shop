import { FooterSubscribe } from "./subscribe/subscribe";
import { FooterNav } from "./navigation/nav";
import { FooterCopy } from "./copyrighting/copyrighting";
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