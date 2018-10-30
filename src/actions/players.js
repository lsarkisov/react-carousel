import {
    ON_PLAYERS_FETCHING,
    ON_PLAYERS_LOADED,
    ON_PLAYERS_ERROR
} from '../const/players'

export const getPlayers = () => {
    return {
        type: ON_PLAYERS_FETCHING,
        players: null
    }
}

export const onPlayersLoaded = (players) => {
    return {
        type: ON_PLAYERS_LOADED,
        players
    }
}

export const onPlayersError = (error) => {
    return {
        type: ON_PLAYERS_ERROR,
        allplayers: null,
        error
    }
}