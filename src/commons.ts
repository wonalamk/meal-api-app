import { ReactComponent as BeefIcon } from './static/icons/beef.svg';
import { ReactComponent as CupcakeIcon } from './static/icons/cupcake.svg';
import { ReactComponent as ChickenIcon } from './static/icons/chicken.svg';
import { ReactComponent as HomeIcon } from './static/icons/home.svg';
import { ReactComponent as PastaIcon } from './static/icons/pasta.svg';
import { ReactComponent as VeganIcon } from './static/icons/vegan.svg';

export enum CATEGORIES {
    HOME="HOME",
    DESSERTS="DESSERTS",
    CHICKEN="CHICKEN",
    BEEF="BEEF",
    PASTA="PASTA",
    VEGAN="VEGAN"
}

export interface Category {
    label: CATEGORIES,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    url: string
}

export const categoryMapping : Category[] = [
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