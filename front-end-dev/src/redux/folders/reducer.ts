import { combineReducers } from 'redux';

import { FodlersWrapperProps } from '@src/models';

import {
  CHANGE_FOLDERS_WRAPPER_WIDTH
} from '@src/redux/folders';

export type State = {
  readonly foldersWrapperWidth: FodlersWrapperProps['width'],
};

export const reducer = combineReducers<State>({
  foldersWrapperWidth: ( state = '0', action ) => {
    switch ( action.type ) {
      case CHANGE_FOLDERS_WRAPPER_WIDTH:
        return action.payload;
      default:
        return state;
    }
  }
});