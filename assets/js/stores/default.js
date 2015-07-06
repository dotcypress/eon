import { EventEmitter } from 'events';
import dispatcher from './../dispatcher';
import actions from './../constants/actions';

const CHANGE_EVENT = 'change';

class DefaultStore extends EventEmitter {

  constructor() {
    super();
    this.data = [];
    this.dispatcherToken = dispatcher.register(m => this.dispatch(m));
  }

  dispatch(payload) {
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
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.data = data;
        this.emitChange();
      });
  }
}

export default new DefaultStore();
