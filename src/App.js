import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Kathrin from './components/Kathrin';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/kathrin" component={Kathrin} />
      </Switch>
    </Router>
  </div>
);

export default App;
