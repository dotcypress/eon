import React from 'react';
import { RouteHandler } from 'react-router';
import { Navigation } from './navigation';

export class App extends React.Component {

  constructor() {
    super();
  };

  render() {
    return <div>
      <Navigation />
      <div className='container'>
        <RouteHandler />
      </div>
    </div>;
  };
}
