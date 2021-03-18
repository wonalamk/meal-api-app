import React from 'react';
import './styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage';
import ErrorPage from './views/ErrorPage';


const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default App;
