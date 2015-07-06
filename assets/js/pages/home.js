import React from 'react';
import actions from './../constants/actions';
import dispatcher from './../dispatcher';

export class HomePage extends React.Component {

  constructor() {
    super();
  };

  componentWillMount() {
    dispatcher.dispatch({
      action: {
        actionType: actions.FETCH_APPS
      }
    });
  }

  componentWillUnmount() {

  }

  render() {
    return <div>Home</div>;
  };
}
