import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const foldersWrapperWidth =
( state: RootState ) => (
  state.folders.foldersWrapperWidth
);

export const foldersWrapperWidthSelector = createSelector(
  [ foldersWrapperWidth ],
  ( foldersWrapperWidth ) => foldersWrapperWidth
);