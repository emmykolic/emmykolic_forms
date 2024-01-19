// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
import Index from './index';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/index" component={Index} />
      </Switch>
    </Router>
  );
};

export default App;
