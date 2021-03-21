import React from 'react';
import { cleanup, render } from '@testing-library/react';
import RecipeEntry from '.';
import { MemoryRouter } from 'react-router-dom'
import { screen } from '@testing-library/react';

describe('full recipe entry', () => {

    const fakeRecipeEntry = {
        idMeal: '1234',
        strMeal: 'Panna Cotta',
        strCategory: 'Dessert',
        strArea: 'area'
    };

    beforeEach(() => {
         render(<RecipeEntry {...fakeRecipeEntry}/>, {wrapper: MemoryRouter});
    });

    afterEach(cleanup);   

    it('renders a recipe name', () => {
        expect(screen.getAllByTestId('meal-name')).toHaveLength(1);
        expect(screen.getByTestId('meal-name')).toHaveTextContent(fakeRecipeEntry.strMeal);    
    });

    it('renders a recipe area', () => {
        expect(screen.getAllByTestId('meal-area')).toHaveLength(1);
        expect(screen.getByTestId('meal-area')).toHaveTextContent(fakeRecipeEntry.strArea);    
    });
    
    it('renders a recipe category', () => {
        expect(screen.getAllByTestId('meal-category')).toHaveLength(1);
        expect(screen.getByTestId('meal-category')).toHaveTextContent(fakeRecipeEntry.strCategory);    
    });

    it('renders correct icon', () => {
        expect(screen.getByTestId('category-icon').firstChild).toHaveTextContent('cupcake.svg');
    })
});


describe('incomplete recipe entry', () => {

    const fakeRecipeEntry = {
        idMeal: '1234',
        strMeal: 'Panna Cotta'
    };

    beforeEach(() => {
         render(
            <RecipeEntry
                idMeal={fakeRecipeEntry.idMeal}
                strMeal={fakeRecipeEntry.strMeal}
            />, {wrapper: MemoryRouter}
        );
    });

    afterEach(cleanup);   

    it('renders a recipe name', () => {
        expect(screen.getAllByTestId('meal-name')).toHaveLength(1);
        expect(screen.getByTestId('meal-name')).toHaveTextContent(fakeRecipeEntry.strMeal);    
    });

    it('renders a recipe area', () => {
        expect(screen.getByTestId('meal-area')).toHaveTextContent('');   
    });
    
    it('renders a recipe category', () => {
        expect(screen.getByTestId('meal-category')).toHaveTextContent(''); 
    });

    it('renders correct icon', () => {
        expect(screen.getByTestId('category-icon').firstChild).toHaveTextContent('plate.svg');
    })
});
