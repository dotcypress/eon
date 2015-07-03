import { EventEmitter }
from 'events';
import assign from 'object-assign';
import dispatcher from './../dispatcher';
import actions from './../constants/actions';

class DefaultStore extends EventEmitter {

  const CHANGE_EVENT = 'change';

  constructor() {
    this.dispatcherToken = dispatcher.register(this.dispatch);
  }

  dispatch(payload) {
    var action = payload.action;
    var text;
    switch (action.actionType) {
      case actions.REFRESH:
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
}

export new DefaultStore();
