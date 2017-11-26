import * as React from 'react';

import {
  FoldersWrapper,
  FoldersHeader,
} from '@src/styled';

import { FodlersWrapperProps } from '@src/models';

interface FoldersProps {
  foldersWrapperWidth: FodlersWrapperProps['width'],
}

export const Folders: React.SFC<FoldersProps> = ( props ) => {
  const { foldersWrapperWidth } = props;
  return (
    <FoldersWrapper width={ foldersWrapperWidth }>
      <FoldersHeader>{'folders'}</FoldersHeader>
    </FoldersWrapper>
  );
};