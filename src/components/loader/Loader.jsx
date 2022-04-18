import spinner from './assets/Spin.svg'
import './loader.scss'


export const Loader = () => {
    return (
        <div className='loader' data-test-id='loader'>
            <img src={spinner} alt="loader" />
        </div>
    )
}