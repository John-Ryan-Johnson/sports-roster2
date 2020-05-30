import React from 'react';
import './TeamContainer.scss';
import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';
import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

class TeamContainer extends React.Component {
  state = {
    players: [],
    formOpen: false,
    editPlayer: {},
  }

  getPlayers = () => {
    playersData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    this.getPlayers();
  }

  removePlayer = (playerId) => {
    playersData.deletePlayer(playerId)
      .then(() => this.getPlayers())
      .catch((err) => console.error('unable to delete player', err));
  }

  saveNewPlayer = (newPlayer) => {
    playersData.savePlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('unable to save player: ', err));
  }

  putPlayer = (playerId, updatedPlayer) => {
    playersData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ formOpen: false, editPlayer: {} });
      })
      .catch((err) => console.error('unable to update player:', err));
  }

  editAPlayer = (player) => {
    this.setState({ formOpen: true, editPlayer: player });
  }


  render() {
    const { players, formOpen, editPlayer } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} editAPlayer={this.editAPlayer} player={player} removePlayer={this.removePlayer}/>);

    return (
      <div className="TeamContainer">
        <h1 className="teamName text-white mt-3 mb-3">VANCOUVER CANUCKS</h1>
        <button className="btn btn-success mb-3" onClick={() => this.setState({ formOpen: true })}>ADD NEW PLAYER</button>
        { formOpen ? <PlayerForm saveNewPlayer={this.saveNewPlayer} player={editPlayer} putPlayer={this.putPlayer}/> : ''}
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default TeamContainer;
