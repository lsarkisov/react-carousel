import React, { Component } from 'react'
import Slider from 'react-slick'
import { SLICK_SETTINGS } from '../../const/slick'
import './css/styles.scss'

class App extends Component {
  state = {
    players: null
  }

  componentDidMount() {
    const { getPlayers } = this.props
    getPlayers()
  }

  componentWillReceiveProps(nextProps) {
    const { players } = nextProps
    this.setState({ players })
  }

  /*
    firstName: 'Jesse',
    lastName: 'Ellis Lingland',
    photo: 'jesse-ellis-lingard.jpg',
    club: 'Manchester United',
    role: 'Center Back',
    status: true,
    interest: true
  */

  render() {
    let { players } = this.state;
    return (
      <div>
        <Slider {...SLICK_SETTINGS} className='slick'>
        {
          players &&
            players.map((player, i) => {
              return (
                <div key={i}>
                  { player.firstName }
                </div>
              )
            })
        }
        </Slider>
      </div>
    );
  }
}

export default App
