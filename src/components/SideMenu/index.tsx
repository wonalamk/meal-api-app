import React from 'react';
import './styles.scss';

import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { CATEGORIES, categoryMapping } from '../../commons';


interface MatchParams {
    category: string;
}

const SideMenu: React.FC<RouteComponentProps<MatchParams>> = (props): JSX.Element => {

    const category = props.match.params.category;
    const isHome = props.location.pathname === '/';
    let activeCategory = category && CATEGORIES[category.toUpperCase() as keyof typeof CATEGORIES]
    activeCategory = isHome ? CATEGORIES.HOME : activeCategory;
    
    const menuItems = categoryMapping.map((cat, index) => {
        const activeClass = (activeCategory && activeCategory === cat.label) ? ' active' : '';
        return (
            <Link data-testid="link" to={cat.url} className={`menu-item${activeClass}`} key={index}>
                <div className="item-icon">
                    <cat.icon/>
                </div>
                <div className="item-name">
                    {cat.label}
                </div>
            </Link>
        )
    });

    return (
        <div className="side-menu">
            <div className="menu-items">
                {menuItems}
            </div>
        </div>
    )
}

export default SideMenu;