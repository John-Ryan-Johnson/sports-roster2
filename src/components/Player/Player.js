import React from 'react';
import './Player.scss';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-md-3">
        <div className="card playerCard mb-3 mx-auto">
          <img class="card-img-top" src={player.imageUrl} alt="player pic"/>
          <div class="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">Position: {player.position}</p>
          </div>
         </div>
      </div>
    );
  }
}

export default Player;
