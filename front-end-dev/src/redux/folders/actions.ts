import { FodlersWrapperProps } from '@src/models';

export const CHANGE_FOLDERS_WRAPPER_WIDTH = 
'CHANGE_FOLDERS_WRAPPER_WIDTH';

export type Actions = {
  CHANGE_FOLDERS_WRAPPER_WIDTH: {
    type: typeof CHANGE_FOLDERS_WRAPPER_WIDTH,
    payload: FodlersWrapperProps['width'], // Потом заменить на более специфический тип ширины блока Папок
  },
};

// Action Creators
export const actionCreators = {
  changeFoldersContainerWidth:
  ( payload: FodlersWrapperProps['width'] ): 
  Actions[typeof CHANGE_FOLDERS_WRAPPER_WIDTH] => ({
    type: CHANGE_FOLDERS_WRAPPER_WIDTH, payload,
  }),
}