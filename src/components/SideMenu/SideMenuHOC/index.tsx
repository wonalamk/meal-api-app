import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SideMenu from '..';

interface MatchParams {
    category: string;
}

const withSideMenu = <T,>(Component: React.FC<T>): React.FC<T> => {
    const wrappedComponent: React.FC<T> = (props: T) => {
        return (
            <>
                <SideMenu  {...props as unknown as RouteComponentProps<MatchParams>}/>
                <Component {...props}/>
            </>
        )
    };

    return wrappedComponent;
}

export default withSideMenu;