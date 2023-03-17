import {
  ON_KEY_DOWN,
  SET_ROW_COUNT,
  START_GAME,
  CLOSE_LOSE_MODAL,
} from '../types';

export const setRowCount = (count) => ({
  type: SET_ROW_COUNT,
  payload: count,
});

export const gemeStart = () => ({
  type: START_GAME,
});

export const onKeyDown = (key) => ({
  type: ON_KEY_DOWN,
  payload: key,
});

export const closeLoseModal = () => ({
  type: CLOSE_LOSE_MODAL,
});
