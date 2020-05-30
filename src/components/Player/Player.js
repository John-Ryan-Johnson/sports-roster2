import React from 'react';
import PropTypes from 'prop-types';
import './Player.scss';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
    editAPlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { editAPlayer, player } = this.props;
    editAPlayer(player);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-md-2">
        <div className="card playerCard mb-3 mx-auto">
          <img className="card-img-top" src={player.imageUrl} alt="player pic"/>
          <div className="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">Position: {player.position}</p>
            <button className="btn btn-success mr-3" onClick={this.deletePlayerEvent}><i className="fas fa-trash"></i></button>
            <button className="btn btn-success ml-3" onClick={this.editPlayerEvent}><i className="fas fa-pen-square"></i></button>
          </div>
         </div>
      </div>
    );
  }
}

export default Player;
