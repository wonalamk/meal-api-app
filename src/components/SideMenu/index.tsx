import React from 'react';
import './styles.scss';

const SideMenu = (): JSX.Element => {

    const categories = ["DESSERTS", "CHICKEN", "BEEF", "PASTA", "VEGAN"];

    const menuItems = categories.map((cat, index) => (
    <div className="menu-item" key={index}>
        <div className="item-icon"/>
        <div className="item-name">
            {cat}
        </div>
        </div>
        )
    )
    return (
        <div className="side-menu">
            <div className="menu-items">
                {menuItems}
            </div>
        </div>
    )
}

export default SideMenu;