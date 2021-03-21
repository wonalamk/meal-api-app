import React, { useCallback, useEffect, useRef, useState } from 'react'
import { RouteComponentProps } from 'react-router';
import { CATEGORIES, RecipeEntryProps } from '../../commons';
import RecipeEntry from '../../components/RecipeEntry';
import './styles.scss';

interface MatchParams {
    category: string;
}

const RecipesPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {

    const [recipes, setRecipes] = useState<RecipeEntryProps[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [recipeEntries, setRecipeEntries] = useState<JSX.Element[]>();
    const mountedRef = useRef(true);
    
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
    const category = props.match.params.category ?? CATEGORIES.DESSERT;

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
    }, [category]);

    useEffect(() => {
        getRecipesByCategory();
    }, [category, getRecipesByCategory]);

    useEffect(() => {
        let entries;
        if (recipes) {
            entries = recipes.map((recipe: RecipeEntryProps, index: number) => 
                <RecipeEntry key={index} showCategory={false} idMeal={recipe['idMeal']} strMeal={recipe.strMeal} strCategory={category} strArea={recipe.strArea}/>
            );
        }
        setRecipeEntries(entries);
    }, [category, recipes]);    

    return (
       <div className="content">
           { loading ? (<div className="loading">Loading...</div>) : <div>{recipeEntries}</div> }
       </div>
    )
}

export default RecipesPage;