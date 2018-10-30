import { connect } from 'react-redux'
import Players from '../../components/players'
import { getPlayers } from '../../actions/players'

const mapStateToProps = (state) => {
  const { players } = state.players
  return { players }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayers: () => {
      dispatch(getPlayers())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players)