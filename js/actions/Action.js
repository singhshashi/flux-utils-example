// @flow

import { ActionType } from './ActionType';

export type Action = {
  type: ActionType.TOGGLE,
  value: boolean
}