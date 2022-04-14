import { useState } from 'react'
import MaskInput from 'react-maskinput/lib'
import './post-delivery.scss'
export const PostcodeDelivery = ({ postCodeError, setPostCodeError }) => {
    const [postCode, setPostCode] = useState(JSON.parse(localStorage.getItem('postcode')))

    const postCodeChangeHandler = ({ target: { value } }) => {
        setPostCode(value)
    }

    const checkPostCode = () => {
        if (postCode?.length >= 9) {
            setPostCodeError(false)
            localStorage.setItem("postcode", JSON.stringify(postCode))
        } else {
            setPostCodeError(true)
            localStorage.setItem("postcode", JSON.stringify(postCode))
        }
    }

    return (
        <div className="postcode">
            <label htmlFor="">
                Postcode
                <MaskInput
                    type="postcode"
                    className='input-delivery'
                    placeholder="BY _ _ _ _ _ _"
                    name="postcode"
                    value={postCode}
                    onBlur={checkPostCode}
                    onChange={postCodeChangeHandler}
                    mask="BY 000000"
                />
                {postCodeError && <div className='errors'><span>Поле должно быть заполнено</span></div>}
            </label>
        </div>
    )
}