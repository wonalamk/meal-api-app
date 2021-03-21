import React from 'react';
import { ReactComponent as ErrorIcon } from '../../static/icons/404.svg';
import './styles.scss';

const ErrorPage = (): JSX.Element => {
    return (
        <div className="error-page">
            <div className="error-content">
                <ErrorIcon/>
                <div className="error-message">This page does not exist. Use side menu to navigate. </div>
            </div>
        </div>
    );
}

export default ErrorPage;