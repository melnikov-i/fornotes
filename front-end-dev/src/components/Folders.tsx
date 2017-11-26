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
  const onMouseOverHandler = () => {
    console.log('[FoldersWrapper]: MouseOver');
  }
  return (
    <FoldersWrapper
      width={ foldersWrapperWidth }
      onMouseOver={onMouseOverHandler}
    >
      <FoldersHeader>{'folders'}</FoldersHeader>
    </FoldersWrapper>
  );
};