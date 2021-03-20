import React from 'react';
import MainBanner from '../../components/MainBanner';
import './styles.scss';

const MainPage = (): JSX.Element => {
    return (
        <div className="content">
            <MainBanner/>
        </div>
    )
}

export default MainPage;