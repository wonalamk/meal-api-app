/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import SideMenu from '.';
import { CATEGORIES } from '../../commons';

it('highlights home category', () => {
    const sideMenuProps = {
        history: {} as any,
        location: {
            pathname: '/'
        } as any,
        match: {
            params: {
                category: ''
            }
        } as any
    }

    const renderResult = render(<MemoryRouter><SideMenu {...sideMenuProps} /></MemoryRouter>);
    const homeIcon = renderResult.getAllByTestId('link')
                    .find((link) => link.firstChild ? link.firstChild.textContent === 'home.svg' : null);
    
    expect(homeIcon).toHaveClass('active');
});

it('does not highlight any category', () => {
    const sideMenuProps = {
        history: {} as any,
        location: {
            pathname: '/recipe/1234'
        } as any,
        match: {
            params: {
                category: ''
            }
        } as any
    }

    const renderResult = render(<MemoryRouter><SideMenu {...sideMenuProps} /></MemoryRouter>);
    const links = renderResult.getAllByTestId('link').find((link) => link.classList.contains('active'));
    expect(links).toBe(undefined);
});

it('highlights dessert category', () => {
    const sideMenuProps = {
        history: {} as any,
        location: {
            pathname: '/recipes/dessert'
        } as any,
        match: {
            params: {
                category: CATEGORIES.DESSERT
            }
        } as any
    }

    const renderResult = render(<MemoryRouter><SideMenu {...sideMenuProps} /></MemoryRouter>);
    const homeIcon = renderResult.getAllByTestId('link')
                    .find((link) => link.firstChild ? link.firstChild.textContent === 'cupcake.svg' : null);
    
    expect(homeIcon).toHaveClass('active');
});
