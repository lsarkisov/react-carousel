// import { HOST, PLAYERS } from '../const/api'
// import { HEADERS } from '../const/https'
import { onPlayersLoaded } from '../actions/players'

export const getPlayers = (action, next) => {
    /*
    // ON REAL PROJECT WE SHOULD USE
    // HTTP REQUEST BUT FOR OUR PURPOSE
    // I WELL USE JUST STATIC DATA

    fetch(`${HOST}/${PLAYERS}`, {
        method: 'POST',
        HEADERS,
        body: JSON.stringify(action.players),
    })
    .then(players => players.json())
    .then(players => next(onPlayersLoaded(players)))
    .error(err => next(on))
    */

   next(onPlayersLoaded([
       {
           firstName: 'Jesse',
           lastName: 'Ellis Lingland',
           photo: 'jesse-ellis-lingard.png',
           club: 'Manchester United',
           role: 'Center Back',
           status: true,
           interest: true
       },
       {
            firstName: 'Robert',
            lastName: 'Wilson',
            photo: 'robert-wilson.png',
            club: 'Manchester United',
            role: 'Forward',
            status: true,
            interest: true
        },
        {
            firstName: 'John',
            lastName: 'Page',
            photo: 'john-page.png',
            club: 'Borussia',
            role: 'Goalkeeper',
            status: true,
            interest: true
        },
        {
            firstName: 'Jesse',
            lastName: 'Ellis Lingland',
            photo: 'jesse-ellis-lingard.png',
            club: 'Manchester United',
            role: 'Center Back',
            status: true,
            interest: true
        },
        {
             firstName: 'Robert',
             lastName: 'Wilson',
             photo: 'robert-wilson.png',
             club: 'Manchester United',
             role: 'Forward',
             status: true,
             interest: true
         },
         {
             firstName: 'John',
             lastName: 'Page',
             photo: 'john-page.png',
             club: 'Borussia',
             role: 'Goalkeeper',
             status: true,
             interest: true
         }
   ]))
}