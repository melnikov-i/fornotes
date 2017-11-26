import * as React from 'react';

import FoldersConnected from '@src/connected/FoldersConnected.usage';
import {
  AppWrapper,
  FoldersBorder,
} from '@src/styled';


export const App = () => {
  return (
    <AppWrapper>
      <FoldersConnected />
      <FoldersBorder />
    </AppWrapper>
  );
};