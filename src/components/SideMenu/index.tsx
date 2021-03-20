import React from 'react';
import './styles.scss';
import { ReactComponent as BeefIcon } from '../../static/icons/beef.svg';
import { ReactComponent as CupcakeIcon } from '../../static/icons/cupcake.svg';
import { ReactComponent as ChickenIcon } from '../../static/icons/chicken.svg';
import { ReactComponent as HomeIcon } from '../../static/icons/home.svg';
import { ReactComponent as PastaIcon } from '../../static/icons/pasta.svg';
import { ReactComponent as VeganIcon } from '../../static/icons/vegan.svg';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface Category {
    label: CATEGORIES,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    url: string
}

interface MatchParams {
    category: string;
}

enum CATEGORIES {
    HOME="HOME",
    DESSERTS="DESSERTS",
    CHICKEN="CHICKEN",
    BEEF="BEEF",
    PASTA="PASTA",
    VEGAN="VEGAN"
}

const SideMenu = (props: RouteComponentProps<MatchParams>): JSX.Element => {

    const category = props.match.params.category;
    const activeCategory =  (category && CATEGORIES[category.toUpperCase() as keyof typeof CATEGORIES]) ?? CATEGORIES.HOME;

    const categories : Category[] = [
        {
            label: CATEGORIES.HOME,
            icon: HomeIcon,
            url: "/"
        },
        {
            label: CATEGORIES.DESSERTS,
            icon: CupcakeIcon,
            url: "/recipies/desserts"
        },
        {
            label: CATEGORIES.CHICKEN,
            icon: ChickenIcon,
            url: "/recipies/chicken"
        },
        {
            label: CATEGORIES.BEEF,
            icon: BeefIcon,
            url: "/recipies/beef"
        },
        {
            label: CATEGORIES.PASTA,
            icon: PastaIcon,
            url: "/recipies/pasta"
        },
        {
            label: CATEGORIES.VEGAN,
            icon: VeganIcon,
            url: "/recipies/vegan"
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