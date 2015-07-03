import React from 'react';
import { run, Route, DefaultRoute, HashLocation } from 'react-router';
import 'react-bootstrap'
import './styles/bootstrap.min.css';
import './styles/main.css';
import './js/dispatcher';
import { App } from './js/components/app';
import { AboutPage } from './js/pages/about';
import { HomePage } from './js/pages/home';

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={HomePage} />
    <Route path="about" handler={AboutPage} />
  </Route>
);

run(routes, HashLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
