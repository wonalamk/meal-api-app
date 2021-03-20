import React from 'react';
import './styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage';
import ErrorPage from './views/ErrorPage';
import withSideMenu from './components/SideMenu/SideMenuHOC';
import RecipesPage from './views/RecipesPage';


const App = (): JSX.Element => {
  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Route exact path="/" component={withSideMenu(MainPage)} />
          <Route path="/recipies/:category" component={withSideMenu(RecipesPage)}/>
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
