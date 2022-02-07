import { SigleServiceItem } from "./single-service/SingleService";
import { SERVICES } from "../../../constants/main/services";

import './services.scss'

export const ServicesMain = () => {
    return (
        <div className='services'>
            {SERVICES.map(({ id, imgSrc, title, desc, alt }) => (
                <SigleServiceItem key={id} imgSrc={imgSrc} title={title} desc={desc} alt={alt} />
            ))}
        </div>
    )
}