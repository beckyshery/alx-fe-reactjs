import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList'; // Assuming you have a list component to show all recipes

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={RecipeList} />
        <Route path="/recipes/:id" component={RecipeDetailsWrapper} />
      </Switch>
    </Router>
  );
};

const RecipeDetailsWrapper = ({ match }) => {
  const { id } = match.params;
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;