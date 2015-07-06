import React from 'react';
import actions from './../constants/actions';
import dispatcher from './../dispatcher';
import defaultStore from './../stores/default';

export class HomePage extends React.Component {

  constructor() {
    super();
    dispatcher.dispatch({
      action: {
        actionType: actions.FETCH_APPS
      }
    });
    this.state = {
      data: {}
    };
    this.reloadApps = this.reloadApps.bind(this);
  };

  componentWillMount() {
    defaultStore.addChangeListener(this.reloadApps);
  }

  componentWillUnmount() {
    defaultStore.removeChangeListener(this.reloadApps);
  }

  reloadApps() {
    this.setState({
      data: defaultStore.data
    });
  }

  render() {
    return <div>Home: {this.state.data.date}</div>;
  };
}
