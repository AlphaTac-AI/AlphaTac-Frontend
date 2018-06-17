import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.less';

import Header from './common/components/header';
import NoMatch from './common/components/no-match';
import Index from './pages/index';
import About from './pages/about';
import Product from './pages/product';
import Team from './pages/team';
import Join from './pages/join';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <div className="app-page">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/join" component={Join} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
