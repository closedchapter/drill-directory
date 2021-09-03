import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Import Google Analytics tracker.
import Track from './hooks/analytics.js'

// Import the home and view components.
import Home from './components/home.js'
import View from './components/view.js'


function App() {
  // Run analytics.
  Track();
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={View} />
      </Switch>
    </>
  );
}
export default App;