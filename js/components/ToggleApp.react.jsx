// @flow

import React, {Component} from 'react'
import {Container} from 'flux/utils';
import type {Store} from 'flux/utils';
import {dispatch} from '../dispatcher/AppDispatcher';
import UIState from '../state/UIState';
import ToggleStore from '../stores/ToggleStore';
import { ActionType } from '../actions/ActionType';

class ToggleApp extends Component<void,void,UIState> {
  state: UIState;

  constructor(props) {
    super(props);
    this._toggle = this._toggle.bind(this);
  }

  static getStores() : Array<Store> {
    return [ToggleStore];
  }

  static calculateState(prevState: ?UIState) : UIState {
    console.log('Inside calculateState');
    console.log(prevState);
    console.log(ToggleStore.getState());
    return {
      showReality: ToggleStore.getState().showReality
    }
  }

  render() {
    console.log('Inside render');
    console.log('Logging State');
    console.log(this.state);
    console.log(this.state.showReality);
    return (
      <div>
        <p>I am a react element</p>
        <button onClick={this._toggle}>Click to Toggle</button>
        <p>{this.state.showReality.toString()}</p>
      </div>
    );
  }

  _toggle(evt) {
    console.log('Dispatching Action Toggle');
    console.log('Logging evt:');
    console.log(evt);
    console.log('Logging this');
    console.log(this);
    console.log('Logging this.state.showReality');
    console.log(this.state.showReality);
    dispatch({
      type: ActionType.TOGGLE,
      value: !this.state.showReality
    });
  }
}

const ToggleAppContainer = Container.create(ToggleApp);
export default ToggleAppContainer;
