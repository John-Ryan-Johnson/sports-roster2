import React from 'react';
import PropTypes from 'prop-types';
import './Player.scss';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  };

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-md-2">
        <div className="card playerCard mb-3 mx-auto">
          <img class="card-img-top" src={player.imageUrl} alt="player pic"/>
          <div class="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">Position: {player.position}</p>
            <button className="btn btn-success" onClick={this.deletePlayerEvent}><i class="fas fa-trash"></i></button>
          </div>
         </div>
      </div>
    );
  }
}

export default Player;
