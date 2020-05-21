import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import TeamContainer from '../components/TeamContainer/TeamContainer';
import MyNavbar from '../components/MyNavbar/MyNavbar';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false, // Whe app loads, you are not authenticated.
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      let componentToLoad = '';
      if (authed) {
        componentToLoad = <TeamContainer />;
      } else {
        componentToLoad = <Auth />;
      }
      return componentToLoad;
    };

    return (
      <div className="App">
        <MyNavbar authed={authed} />
        <h1 className="roster text-white mt-3">Team Roster</h1>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
