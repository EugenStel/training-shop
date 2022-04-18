import './succsess-order.scss'

export const SuccsessOrder = ({ handleCartClose }) => {


    return (
        <div className="nice-job">
            <div className="info">
                <h1>Thank you for your order</h1>
                <div>Information about your order will appear in your e-mail.</div>
                <div>Our manager will call you back.</div>
            </div>
            <button className='back-button' onClick={handleCartClose}>
                Back to shopping
            </button>
        </div>
    )
}