import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import './index.less';

import Header from './common/components/header';
import NoMatch from './common/components/no-match';
import Index from './pages/index';
import About from './pages/about';
import ProjectsPage from './pages/projects';
import Team from './pages/team';
import Join from './pages/join';

import { english } from "./utilities/locale/en"; 
import { chinese } from "./utilities/locale/zh"; 
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";

class App extends Component {

  render() {

    addLocaleData([...en, ...zh]);

    const locale = { zh: chinese, en: english };

    const language =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage;

    const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];  

    const messages = locale[languageWithoutRegionCode] || locale[language] || locale.zh;

    return (
      <IntlProvider locale={language} messages={messages}> 
        <Router>
          <div className="app">
            <Header />
            <div className="app-page">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/join" component={Join} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </Router>
      </IntlProvider>
    )
  }
}

export default App;
