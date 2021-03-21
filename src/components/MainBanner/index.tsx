import React from 'react';
import { ReactComponent as CreatureIcon } from '../../static/icons/creature.svg';
import './styles.scss';


interface MainBannerProps {
    sectionId: string;
}

const MainBanner: React.FC<MainBannerProps> = (props): JSX.Element => {
    return (
        <div className="banner-container">
            <div className="left-side">
                <CreatureIcon/>
            </div>
            <div className="right-side">
                <div className="right-side-wrapper">
                    <div className="welcome-text">
                        Find your favourite recipes from <span className="highlight">Free meal API</span>!
                    </div>
                    <a href={`#${props.sectionId}`} className="button">Let's cook!</a>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;