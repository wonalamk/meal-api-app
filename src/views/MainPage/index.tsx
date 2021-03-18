import React from 'react';
import MainBanner from '../../components/MainBanner';
import SideMenu from '../../components/SideMenu';
import './styles.scss';

const MainPage = (): JSX.Element => {
    return (
        <div className="main-container">
            <SideMenu/>
            <div className="content">
                <MainBanner/>
            </div>
        </div>
    )
}

export default MainPage;