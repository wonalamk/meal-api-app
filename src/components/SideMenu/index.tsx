import React from 'react';
import './styles.scss';
import { ReactComponent as BeefIcon } from '../../static/icons/beef.svg';
import { ReactComponent as CupcakeIcon } from '../../static/icons/cupcake.svg';
import { ReactComponent as ChickenIcon } from '../../static/icons/chicken.svg';
import { ReactComponent as HomeIcon } from '../../static/icons/home.svg';
import { ReactComponent as PastaIcon } from '../../static/icons/pasta.svg';
import { ReactComponent as VeganIcon } from '../../static/icons/vegan.svg';
import { Link } from 'react-router-dom';


interface Category {
    label: CATEGORIES,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    url: string
}

enum CATEGORIES {
    HOME="HOME",
    DESSERTS="DESSERTS",
    CHICKEN="CHICKEN",
    BEEF="BEEF",
    PASTA="PASTA",
    VEGAN="VEGAN"
}

interface SideMenuProps {
    activeCategory?: CATEGORIES;
}


const SideMenu = (props: SideMenuProps): JSX.Element => {

    const {
        activeCategory = CATEGORIES.HOME
    } = props;

    const categories : Category[] = [
        {
            label: CATEGORIES.HOME,
            icon: HomeIcon,
            url: "/"
        },
        {
            label: CATEGORIES.DESSERTS,
            icon: CupcakeIcon,
            url: "/recipes/desserts"
        },
        {
            label: CATEGORIES.CHICKEN,
            icon: ChickenIcon,
            url: "/recipes/chicken"
        },
        {
            label: CATEGORIES.BEEF,
            icon: BeefIcon,
            url: "/recipes/beef"
        },
        {
            label: CATEGORIES.PASTA,
            icon: PastaIcon,
            url: "/recipes/pasta"
        },
        {
            label: CATEGORIES.VEGAN,
            icon: VeganIcon,
            url: "/recipes/vegan"
        }
    ];

    const menuItems = categories.map((cat, index) => {
        const activeClass = (activeCategory && activeCategory === cat.label) ? ' active' : '';
        return (
            <Link to={cat.url} className={`menu-item${activeClass}`} key={index}>
                <div className="item-icon">
                    <cat.icon/>
                </div>
                <div className="item-name">
                    {cat.label}
                </div>
            </Link>
        )
    }
    );

    return (
        <div className="side-menu">
            <div className="menu-items">
                {menuItems}
            </div>
        </div>
    )
}

export default SideMenu;