import {
  ON_PLAYERS_FETCHING,
  ON_PLAYERS_LOADED,
  ON_PLAYERS_ERROR,
} from '../const/players';

export const players = (state = {}, action) => {
  const {players} = action;
  switch (action.type) {
    case ON_PLAYERS_FETCHING:
      return {
        ...state,
        isPlayersFetching: true,
        playersError: false,
      };
    case ON_PLAYERS_LOADED:
      return {
        ...state,
        isPlayersFetching: true,
        players,
        playersError: false,
      };
    case ON_PLAYERS_ERROR:
      const {error} = action;
      return {
        ...state,
        isPlayersFetching: true,
        playersError: error,
      };
    default:
      return {...state};
  }
};
