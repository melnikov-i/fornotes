import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

import { reducer as folders, State as FoldersState } from '@src/redux/folders';

export interface RootState {
  router: RouterState,
  folders: FoldersState,
}

export const rootReducer = combineReducers<RootState>({
  router,
  folders,
});