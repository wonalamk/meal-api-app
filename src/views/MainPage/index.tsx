import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RecipeEntryProps } from '../../commons';
import MainBanner from '../../components/MainBanner';
import RecipeEntry from '../../components/RecipeEntry';
import './styles.scss';

const MainPage: React.FC = (): JSX.Element => {

    const alphabet = 'abcdefghijklmnoprstuvwxyz'
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

    const [recipes, setRecipes] = useState<RecipeEntryProps[]>();
    const [randomLetter, setRandomLetter] = useState('');
    const [loading, setLoading] = useState(true);
    const mountedRef = useRef(true);

    
    const getRecipesByLetter = useCallback(async () => {
        const letter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
        setRandomLetter(letter);
        try {
            fetch(apiUrl + letter)
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
            });
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        getRecipesByLetter();
    }, [getRecipesByLetter]);

    const recipesEntries = recipes ? recipes.map((recipe, index) => 
        <RecipeEntry key={index} idMeal={recipe.idMeal} strMeal={recipe.strMeal} strCategory={recipe.strCategory} strArea={recipe.strArea}/>
    ) : null;

    return (
        <div className="content">
            <MainBanner sectionId="recipes"/>
            <div className="headline"> Recipes starting with letter <span className="letter">{randomLetter}</span></div>
            <div id="recipes">
                {loading ? 
                (<div className="loading">Loading...</div>) : 
                (recipesEntries ?? <div>No recipes starting with letter {randomLetter}</div>)}
            </div>
        </div>
    )
}

export default MainPage;