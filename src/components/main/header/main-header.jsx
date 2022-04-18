import { Sliders } from "../../sliders/Sliders";
import { HEAD_SLIDER } from "../../../constants/main/head-slider";
import { CategoriesNav } from "./categories/categories";
import './main-header.scss'

export const MainHeader = () => {
    return (
        <>
            <div className='main-header'>
                <Sliders slides={HEAD_SLIDER} />
                <CategoriesNav />
            </div>
        </>
    )
}