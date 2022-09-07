import {INITIAL_PIECES} from '../globals';

export const NEW_GAME = {
  pieces: INITIAL_PIECES,
  toMove: 0,
  castledBlack: false,
  castledWhite: false,
};

export const gameReducer = (state, action) => {
  switch(action.type) {
  case "INIT":
    return {...NEW_GAME};
  case "ADD":
    return {
      ...state,
      pieces: {...state.pieces,
		[action.payload.to]: action.payload.piece}};
  case "MOVE":
    return {
      ...state,
      pieces: {...state.pieces,
	       [action.payload.from]: undefined,
	       [action.payload.to]: action.payload.piece}};
  default:
    return null;
  }
};