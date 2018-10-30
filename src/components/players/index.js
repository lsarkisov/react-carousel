import React, { Component } from 'react'
import Slider from 'react-slick'
import { Container, Card, Image, Icon, Button } from 'semantic-ui-react'
import { SLICK_SETTINGS } from '../../const/slick'

class Players extends Component {
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

  render() {
    let { players } = this.state;
    return (
      <Container>
        <Slider {...SLICK_SETTINGS} className='carousel slick'>
        {
          players && players.map((player, i) => {
            return (
              <Card.Group key={i}>
                <Card>
                  <Card.Content>
                    <Image floated='left' size='mini' src={`/img/${player.photo}`} />
                    <Card.Header className='ellipsis'>
                      {player.firstName} {player.lastName}
                    </Card.Header>
                    <Card.Meta>
                      <p className='ellipsis'>{ player.club }</p>
                      <p className='ellipsis'>{ player.role }</p>
                      <div className='meta-info'>
                        <span className='status'>available</span>
                        <Button basic color='yellow' className='interest'>
                          <Icon name='thumbs up' />
                          declare interest
                        </Button>
                      </div>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </Card.Group>
              )
            })
        }
        </Slider>
      </Container>
    );
  }
}

export default Players
