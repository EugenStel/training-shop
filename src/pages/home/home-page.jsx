import { MainHeader } from "../../components/main/header/main-header";
import { ServicesMain } from "../../components/main/services/services";
import { PRODUCT_TYPES } from "../../constants/main/productTypes";
import { Clothes } from "../../components/main/clothes/clothes";
import { Promo } from "../../components/main/promo/Promo";
import { MainSubscribe } from "../../components/main/subscribe/subscribe";
import { Blog } from "../../components/main/blog/Blog";

export const HomePage = () => {
    return (
        <>
            <MainHeader />
            <div className="wrapper">
                <ServicesMain />
                {PRODUCT_TYPES.map(({ id, productType }) => {
                    return <Clothes productType={productType} key={id} />
                })}
                <Promo />
            </div>
            <MainSubscribe />
            <div className="wrapper">
                <Blog />
            </div>
        </>
    );
}