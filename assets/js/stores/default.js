import { EventEmitter } from 'events';
import dispatcher from './../dispatcher';
import actions from './../constants/actions';

const CHANGE_EVENT = 'change';

class DefaultStore extends EventEmitter {

  constructor() {
    super();
    this.apps = [];
    this.dispatcherToken = dispatcher.register(this.dispatch.bind(this));
  }

  dispatch(payload) {
    console.log(payload);
    var action = payload.action;
    var text;
    switch (action.actionType) {
      case actions.FETCH_APPS:
        this.fetchApps();
        break;
    }
    return true;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  fetchApps() {
    fetch('/api/ping')
      .then(function(response) {
        return response.json()
      })
      .then(function(apps) {
        this.apps = apps;
        this.emitChange();
      }.bind(this));
  }
}

export default new DefaultStore();

