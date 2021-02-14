import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Kathrin from './components/Kathrin';
import Mom from './components/Mom';
import Dad from './components/Dad';
import Michael from './components/Michael';
import Sarah from './components/Sarah';
import Cathryn from './components/Cathryn';

const Home = () => <h1>home</h1>;

const App = () => (
  <div style={{ width: 1200 }}>
    <Router basename="/">
      <Route exact path="/" component={Home} />
      <Route path="/kathrin" component={Kathrin} />
      <Route path="/mom" component={Mom} />
      <Route path="/dad" component={Dad} />
      <Route path="/michael" component={Michael} />
      <Route path="/sarah" component={Sarah} />
      <Route path="/cathryn" component={Cathryn} />
    </Router>
  </div>
);

export default App;
