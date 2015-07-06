import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export class AboutPage extends React.Component {

  constructor() {
    super();
  };

  render() {
    return <Jumbotron>
    <h1>eon</h1>
    <p>React+Flux+Babel+Koa+Bootstrap+Webpack boilerplate.</p>
  </Jumbotron>;
  };
}
