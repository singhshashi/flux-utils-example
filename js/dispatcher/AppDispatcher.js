// @flow

import type {Action} from '../actions/Action';

import {Dispatcher} from 'flux';

const instance: Dispatcher<Action> = new Dispatcher();
export default instance;

export const dispatch = instance.dispatch.bind(instance);