import {INITIAL_PIECES} from '../globals';

export const INITIAL_GAME = {
  pieces: INITIAL_PIECES,
  toMove: 0,
  castledBlack: false,
  castledWhite: false,
};

export const gameReducer = (state, action) => {
  switch(action.type) {
  case "INIT":
    return {...INITIAL_GAME};
  default:
    return null;
  }
};
