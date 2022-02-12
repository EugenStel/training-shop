import { OPPORTUNITY } from "../../../constants/products/opportunity"

import './opportunity.scss'

export const Opportunity = () => {
    return (
        <div className="scope">
            {OPPORTUNITY.map(({ id, imgSrc, alt, content }) => {
                return (
                    <div className={alt} key={id}>
                        <img src={imgSrc} alt={alt} className={`${alt}-img`} />
                        <span>{content}</span>
                    </div>
                )
            })}
        </div>
    )
}