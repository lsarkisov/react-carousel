import {
    ON_PLAYERS_FETCHING,
} from '../const/players'
import { getPlayers } from './players'

const before = (action, next) => {
    switch (action.type) {
    case ON_PLAYERS_FETCHING:
        getPlayers(action, next)
        break
    default:
        return {}
    }
  };

const after = () => {};

const eventsMiddlewares = ({ getState }) => next => (action) => {
    before(action, next)
    after(getState)
    return next(action)
};


export default eventsMiddlewares
