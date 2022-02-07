import PropTypes from 'prop-types';
import { SOCIAL_NETWORK_ICONS } from "../../../constants/header/social-network-icons";

import './social.scss'

export const SocialIcons = ({ iconSize }) => {
    return (
        <div className='social_networks'>
            {SOCIAL_NETWORK_ICONS.map(({ id, imgSrc }) => (
                <a href='/#' className='social_networks_item' key={id}>
                    <img src={imgSrc} width={iconSize} alt='imgUser' className='social_networks_item_img' />
                </a>
            ))}
        </div>
    )
}


SocialIcons.propTypes = {
    iconSize: PropTypes.oneOf(['14px', '18px'])
};

SocialIcons.defaultProps = {
    iconSize: '14px'
};