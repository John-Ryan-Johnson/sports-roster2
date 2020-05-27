import React from 'react';
import './PlayerForm.scss';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';


class PlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
  }

  state = {
    playerImageUrl: '',
    playerName: '',
    playerPosition: '',
  }

  savePlayer = (e) => {
    e.preventDefault();
    const { playerImageUrl, playerName, playerPosition } = this.state;
    const { saveNewPlayer } = this.props;
    const newPlayer = {
      imageUrl: playerImageUrl,
      name: playerName,
      position: playerPosition,
      uid: authData.getUid(),
    };
    saveNewPlayer(newPlayer);
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ playerImageUrl: e.target.value });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  render() {
    const { playerImageUrl, playerName, playerPosition } = this.state;

    return (
      <div className="PlayerForm">
      <form className="col-6 offset-3 text-white">
        <div className="form-group">
          <label htmlFor="player-image-url">Player Image Url</label>
          <input
            type="text"
            className="form-control"
            id="player-image-url"
            placeholder="Enter Image Url"
            value={playerImageUrl}
            onChange={this.imageUrlChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="player-name">Player Name</label>
          <input
            type="text"
            className="form-control"
            id="player-name"
            placeholder="Enter Name"
            value={playerName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="player-position">Player Position</label>
          <input
            type="text"
            className="form-control"
            id="player-position"
            placeholder="Enter Position"
            value={playerPosition}
            onChange={this.positionChange}
          />
        </div>
        <button className="btn btn-dark mb-3" onClick={this.savePlayer}>Save Player</button>
      </form>
    </div>
    );
  }
}

export default PlayerForm;
