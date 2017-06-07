import { handleActions } from 'redux-actions';
import { UiState } from '../../constants/models';

import {
  SHOW_SPINNER,
  HIDE_SPINNER,
} from '../../constants/actionTypes';

// 隨著 fetch 結果顯示 spinner
const uiReducers = handleActions({
  SHOW_SPINNER: (state) => (
    state.set(
      'spinnerVisible',
      true,
    )
  ),
  HIDE_SPINNER: (state) => (
    state.set(
      'spinnerVisible',
      false,
    )
  ),
}, UiState);

export default uiReducers;
