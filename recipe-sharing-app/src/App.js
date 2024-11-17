import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails.jsx';
import RecipeList from './components/RecipeList.jsx'; 

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