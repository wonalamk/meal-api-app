import React, { useCallback, useEffect, useRef, useState } from 'react';
import MainBanner from '../../components/MainBanner';
import RecipeEntry from '../../components/RecipeEntry';
import './styles.scss';

const MainPage = (): JSX.Element => {

    const alphabet = 'abcdefghijklmnoprstvwyz'
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

    const [recipes, setRecipes] = useState([]);
    const [randomLetter, setRandomLetter] = useState("");
    const [loading, setLoading] = useState(true);
    const mountedRef = useRef(true);

    
    useEffect(() => {
        getRecipesByLetter();
    }, []);

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

    const recipesEntries = recipes ? recipes.map((recipe, index) => 
        <RecipeEntry key={index} idMeal={recipe['idMeal']} strMeal={recipe['strMeal']} strCategory={recipe['strCategory']} strArea={recipe['strArea']}/>
    ) : [];

    return (
        <div className="content">
            <MainBanner/>
            <div className="headline"> Recipes starting with letter <span className="letter">{randomLetter}</span></div>
            {loading ? (<div className="loading">Loading...</div>) : <div>{recipesEntries}</div>}
        </div>
    )
}

export default MainPage;