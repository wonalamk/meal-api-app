import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Recipe } from '../../commons';
import './styles.scss';

interface MatchParams {
    id: string;
}

const RecipeDetailsPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [recipe, setRecipe] = useState<Recipe>();
    const [ingredientList, setIngredientList] = useState<JSX.Element[]>([]);

    const mountedRef = useRef(true);
    const mealId = props.match.params.id;
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
    const ingredientKey = 'strIngredient'
    const measureKey = 'strMeasure';

    const getRecipeById = useCallback(async () => {
        setLoading(true);
        try {
            fetch(apiUrl + mealId)
            .then((response) => {
                if (!mountedRef.current) {
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (data) {
                    setRecipe(data.meals[0]); 
                    setLoading(false);
                }
            })
        } catch (e) {
            console.log(e);
        }
    }, [mealId])

    useEffect(() => {
        getRecipeById();
    }, [getRecipeById, mealId]);
        
    useEffect(() => {
        const ingredientsEntries = [];
        if (recipe) {
            for (let i=1; i <= 20; i++) {
                const ingredient = recipe[ingredientKey + i];
                const measure = recipe[measureKey + i];
                if (ingredient && ingredient.length !== 0  && measure && measure.length !== 0) {
                    const singleEntry = (<li key={i}><span>{measure}</span> {ingredient}</li>)
                    ingredientsEntries.push(singleEntry);
                }
            }
        }
        setIngredientList(ingredientsEntries);
    }, [recipe]);
    
    const recipeContent = (
        <>
            <div className="left-side">
                <div className="recipe-name">
                    {recipe?.strMeal}
                </div>
                <div className="section-header">Ingredients</div>
                <div className="ingredients">
                    {ingredientList ?? null}
                </div>
                <div className="section-header">Instructions</div>
                <div className="instructions">
                    {recipe?.strInstructions}
                </div>
            </div>
            <div className="right-side">
                <div className="photo">
                        <img src={recipe?.strMealThumb}/>
                </div>
            </div>
        </>
    );

    return (
        <div className="recipe-details">
            {loading ? <div className="loading">Loading...</div> : recipeContent}
        </div>
    );
}

export default RecipeDetailsPage;