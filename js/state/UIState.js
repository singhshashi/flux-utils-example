// @flow

import * as Immutable from 'immutable';

const UIStateRecord = Immutable.Record({showReality: false});

export default class UIState extends UIStateRecord {
  showReality: boolean;

  constructor() {
    super({showReality: false});
  }
}