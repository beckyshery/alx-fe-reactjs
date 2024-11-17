import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList'; // Assuming you have a list component to show all recipes

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={RecipeList} />
        <Route path="/recipes/:id" component={RecipeDetails} />
      </Switch>
    </Router>
  );
};

export default App;