// @flow
import type {Action} from '../actions/Action';
import {ReduceStore} from 'flux/utils';
import UIState from '../state/UIState';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionType } from '../actions/ActionType';

class ToggleStore extends  ReduceStore<UIState> {
  getInitialState() : UIState {
    return new UIState();
  }

  reduce(state: UIState, action: Action) {
    switch (action.type) {
      case ActionType.TOGGLE:
        console.log('Inside Reduce, catching action Type toggle');
        console.log(action.value);
        return state.set('showReality', action.value);
      default:
        return state;
    }
  }
}
const instance = new ToggleStore(AppDispatcher);
export default instance;