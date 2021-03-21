import { ReactComponent as BeefIcon } from './static/icons/beef.svg';
import { ReactComponent as CupcakeIcon } from './static/icons/cupcake.svg';
import { ReactComponent as ChickenIcon } from './static/icons/chicken.svg';
import { ReactComponent as HomeIcon } from './static/icons/home.svg';
import { ReactComponent as PastaIcon } from './static/icons/pasta.svg';
import { ReactComponent as VeganIcon } from './static/icons/vegan.svg';

export enum CATEGORIES {
    HOME="HOME",
    DESSERT="DESSERT",
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
        url: "/",
    },
    {
        label: CATEGORIES.DESSERT,
        icon: CupcakeIcon,
        url: "/recipies/dessert"
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

export interface Recipe {
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strIngredient1?: string
    strIngredient2?: string
    strIngredient3?: string
    strIngredient4?: string
    strIngredient5?: string
    strIngredient6?: string
    strIngredient7?: string
    strIngredient8?: string
    strIngredient9?: string
    strIngredient10?: string
    strIngredient11?: string
    strIngredient12?: string
    strIngredient13?: string
    strIngredient14?: string
    strIngredient15?: string
    strIngredient16?: string
    strIngredient17?: string
    strIngredient18?: string
    strIngredient19?: string
    strIngredient20?: string
    strMeasure1?: string;
    strMeasure2?: string;
    strMeasure3?: string;
    strMeasure4?: string;
    strMeasure5?: string;
    strMeasure6?: string;
    strMeasure7?: string;
    strMeasure8?: string;
    strMeasure9?: string;
    strMeasure10?: string;
    strMeasure11?: string;
    strMeasure12?: string;
    strMeasure13?: string;
    strMeasure14?: string;
    strMeasure15?: string;
    strMeasure16?: string;
    strMeasure17?: string;
    strMeasure18?: string;
    strMeasure19?: string;
    strMeasure20?: string;
    [key: string]: string | undefined;
}

export interface RecipeEntryProps {
    idMeal: string;
    strMeal: string;
    strCategory?: string;
    strArea?: string;
    showCategory?: boolean;
}
