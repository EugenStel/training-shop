import { CHECKOUT } from "../../../constants/products/checkout"

import './checkout.scss'
export const Checkout = () => {
    return (
        <div className='checkout_image'>
            {CHECKOUT.map(({ id: idImage, imgSrc, alt }) => (
                <img key={idImage} src={imgSrc} alt={alt} />
            ))}
        </div>
    )
}