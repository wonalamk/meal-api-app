import React from 'react'
import { RouteComponentProps } from 'react-router';

interface MatchParams {
    category: string;
}

const RecipesPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
    return (
        <div>Recipes {props.match.params.category}</div>
    )
}

export default RecipesPage;