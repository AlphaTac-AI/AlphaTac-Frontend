import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './index.less';

import Header from './common/components/header';

const Loading = () => {
  return <div />;
}

const Index = Loadable({
    loader: () => import('./pages/index'),
    loading: Loading
});

const About = Loadable({
    loader: () => import('./pages/about'),
    loading: Loading
});

const Product = Loadable({
    loader: () => import('./pages/product'),
    loading: Loading
});

const Team = Loadable({
    loader: () => import('./pages/team'),
    loading: Loading
});

const Join = Loadable({
    loader: () => import('./pages/join'),
    loading: Loading
});

const NoMatch = Loadable({
    loader: () => import('./common/components/no-match'),
    loading: Loading
});

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
