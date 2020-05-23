import React from 'react';
import './TeamContainer.scss';
import playerData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';
import Player from '../Player/Player';

class TeamContainer extends React.Component {
  state = {
    players: [],
  }

  getPlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    this.getPlayers();
  }

  removePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => this.getPlayers())
      .catch((err) => console.error('unable to delete player', err));
  };


  render() {
    const { players } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} player={player} removePlayer={this.removePlayer}/>);
    return (
      <div className="TeamContainer">
        <h1 className="teamName text-white mt-3 mb-3">VANCOUVER CANUCKS</h1>
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default TeamContainer;
