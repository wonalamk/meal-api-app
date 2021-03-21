import React from 'react';
import './styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage';
import ErrorPage from './views/ErrorPage';
import withSideMenu from './components/SideMenu/SideMenuHOC';
import RecipesPage from './views/RecipesPage';
import RecipeDetailsPage from './views/RecipeDetailsPage';


const App = (): JSX.Element => {
  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Route exact path="/" component={withSideMenu(MainPage)} />
          <Route path="/recipes/:category" component={withSideMenu(RecipesPage)}/>
          <Route path="/recipe/:id" component={withSideMenu(RecipeDetailsPage)}/>
          <Route component={withSideMenu(ErrorPage)}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
