import { Link } from 'react-router-dom'
import './categories.scss'

export const CategoriesNav = () => {
    return (
        <>
            <div className='categ_nav'>
                <div className='categ_nav_top'>
                    <Link to='/women' className='categ_nav_top_left_bg'>
                        <div className='categ_nav_top_left' type='button'>
                            women
                        </div>
                    </Link>
                    <Link to='/men' className='categ_nav_top_right_bg'>
                        <div className='categ_nav_top_right' type='button'>
                            men
                        </div>
                    </Link>
                </div>
                <Link to='/accessories' className='categ_nav_bottom_bg'>
                    <div className='categ_nav_bottom' type='button'>
                        accessories
                    </div>
                </Link>
            </div>
        </>
    )
}