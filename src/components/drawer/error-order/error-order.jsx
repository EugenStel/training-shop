import { getOrderError } from '../../../redux/order/orderSelectors'
import { useSelector } from 'react-redux'
import './error-order.scss'
export const ErrorOrder = () => {
    const errorMessage = useSelector(getOrderError)
    return (
        <div className="error-order-wrapper">
            <h1>Sorry, your payment has not been processed.</h1>
            <div>{errorMessage}</div>
        </div>
    )
}