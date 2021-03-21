import React from 'react';
import { categoryMapping, RecipeEntryProps } from '../../commons';
import './styles.scss';
import { ReactComponent as PlateIcon } from '../../static/icons/plate.svg';
import { Link } from 'react-router-dom';

const RecipeEntry: React.FC<RecipeEntryProps> = (props): JSX.Element => {
    const category = categoryMapping.find(i => i.label === props.strCategory?.toUpperCase());
    
    const {
        showCategory = true
    } = props;

    return (
        <div className="recipe-entry">
            <div className="entry-content">
                <div data-testid="category-icon" className="category-icon">
                    {category ? <category.icon/> : <PlateIcon/>}
                </div>
                <div data-testid="meal-name" className="meal-name">
                    {props.strMeal}
                </div>
                <div data-testid="meal-category" className="meal-category">
                    {showCategory ? props.strCategory : ''}
                </div>
                <div data-testid="meal-area" className="meal-area">
                    {props.strArea}
                </div>
                <Link className="button" to={`/recipe/${props.idMeal}`}>
                    <div className="button-content">
                        <span className="label">Recipe</span>
                        <span className="icon">🠒</span>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default RecipeEntry;