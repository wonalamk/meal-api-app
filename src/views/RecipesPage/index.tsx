import React, { useCallback, useEffect, useRef, useState } from 'react'
import { RouteComponentProps } from 'react-router';
import { CATEGORIES } from '../../commons';
import RecipeEntry from '../../components/RecipeEntry';
import './styles.scss';

interface MatchParams {
    category: string;
}

const RecipesPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [recipeEntries, setRecipeEntries] = useState<JSX.Element[]>();
    const mountedRef = useRef(true);
    
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
    const category = props.match.params.category ?? CATEGORIES.DESSERT;

    useEffect(() => {
        getRecipesByCategory();
    }, [category]);

    const getRecipesByCategory = useCallback(async () => {
        setLoading(true);
        try {
            fetch(apiUrl + category)
            .then((response) => {
                if (!mountedRef.current) {
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (data) {
                    setRecipes(data.meals); 
                    setLoading(false);
                }
            })
        } catch (e) {
            console.log(e);
        }
    }, [category])

    useEffect(() => {
        let entries;
        if (recipes) {
            entries = recipes.map((recipe, index) => <RecipeEntry key={index} showCategory={false} idMeal={recipe['idMeal']} strMeal={recipe['strMeal']} strCategory={category} strArea={recipe['strArea']}/>);
        }
        setRecipeEntries(entries);
        
    }, [recipes]);    

    return (
       <div className="content">
           { loading ? (<div className="loading">Loading...</div>) : <div>{recipeEntries}</div> }
       </div>
    )
}

export default RecipesPage;