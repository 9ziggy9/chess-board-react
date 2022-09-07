import {INITIAL_PIECES} from '../globals';

export const NEW_GAME = {
  pieces: INITIAL_PIECES,
  whiteMove: true,
  castledBlack: false,
  castledWhite: false,
};

export const gameReducer = (state, action) => {
  switch(action.type) {
  case "INIT":
    console.log("HIT INIT");
    return {...NEW_GAME};
  case "ADD":
    return {
      ...state,
      pieces: {...state.pieces,
		[action.payload.to]: action.payload.piece}};
  case "MOVE":
    const newState = {
      ...state,
      whiteMove: false,
      pieces: {...state.pieces,
	       [action.payload.from]: undefined,
	       [action.payload.to]: action.payload.piece}};
    console.log(newState.pieces);
    return newState;
  default:
    return null;
  }
};
