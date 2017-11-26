import styled from 'styled-components';

import { GridDiv } from '@src/styled';
import { FodlersWrapperProps } from '@src/models';

export const FoldersWrapper = GridDiv.extend`
  min-width: 20%;
  max-width: 40%;
  width: ${(props: FodlersWrapperProps) => props.width }px;
  height: 100%;
  overflow: hidden;
  background: #e6e6e6;
`;

export const FoldersHeader = styled.h1`
  padding: 5px 15px;
  font-family: 'Verdana', sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #828282;
  text-transform: uppercase;
`;

export const FoldersBorder = GridDiv.extend`
  width: 1px;
  height: 100%;
  background: #505050;
`;