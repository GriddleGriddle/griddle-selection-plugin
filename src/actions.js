import * as types from './constants';

export function toggleRowSelection(griddleKey) {
  return {
    type: types.GRIDDLE_ROW_SELECTION_TOGGLED,
    griddleKey
  };

}