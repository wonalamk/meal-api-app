import React, { useCallback, useEffect, useState } from 'react';
import MainBanner from '../../components/MainBanner';
import RecipeEntry from '../../components/RecipeEntry';
import './styles.scss';

const MainPage = (): JSX.Element => {

    const alphabet = 'abcdefghijklmnoprstvwyz'
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

    const [recipes, setRecipes] = useState([]);
    const [randomLetter, setRandomLetter] = useState("");
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getRecipesByLetter();
    }, []);

    const getRecipesByLetter = useCallback(async () => {
        const letter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
        setRandomLetter(letter);
        try {
            setLoading(true);
            fetch(apiUrl + letter).then((response) => response.json()).then(data => setRecipes(data.meals));
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }, [])

    const recipesEntries = recipes ? recipes.map((recipe, index) => 
        <RecipeEntry key={index} idMeal={recipe['idMeal']} strMeal={recipe['strMeal']} strCategory={recipe['strCategory']} strArea={recipe['strArea']}/>
    ) : [];



    return (
        <div className="content">
            <MainBanner/>
            <div className="headline"> Recipes starting with letter <span className="letter">{randomLetter}</span></div>
            {loading ? <div>Loading</div> : <div>{recipesEntries}</div>}
        </div>
    )
}

export default MainPage;