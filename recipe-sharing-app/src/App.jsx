import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail'; // Import your RecipeDetail component
import SearchBar from './SearchBar';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Switch>
          <Route path="/recipes/:id" component={RecipeDetail} /> {/* Route for recipe details */}
          <Route path="/" component={RecipeList} /> {/* Default route for recipe list */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;