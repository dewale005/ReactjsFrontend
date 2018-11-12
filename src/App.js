import React, { Component } from 'react';
import Home from './routes/home';
import Dashboard from './routes/dashboard';
import Auth0Lock from 'auth0-lock';
import logo from './img/wale2.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: '',
      profile: {}
    }
  }
  componentWillMount() {
    this.lock = new Auth0Lock('i5w9R6x5R2Aj5TznYDybme2c4bbrsoYE', 'dewale005.auth0.com', {
      theme: {
        logo: logo,
        primaryColor: '#361a7c'
      },
      languageDictionary: {
         title: ""
      },
    });
    this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.accessToken, (error, profile) => {
        if (error) {
          console.log(error);
          return;
        }
        this.setData(authResult.accessToken, profile);
      });
    })
    this.getData();
  }

  setData(accessToken, profile) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.setState({
      accessToken: localStorage.getItem('accessToken'),
      profile: JSON.parse(localStorage.getItem('profile')),
    });
  }

  getData() {
    if (localStorage.getItem('accessToken') != null) {
      this.setState({
        accessToken: localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile')),
      }, () => {
        console.log(this.state);
      });
    }
  }

  showLock() {
    this.lock.show();
  }
  logOut() {
    this.setState({
      accessToken:'',
      profile:'',
    }, () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
    });
  }
  
  render() {
    let page;
    if (this.state.accessToken) {
      page = <Dashboard
      lock={this.lock}
      accessToken={this.state.accessToken}
      profile={this.state.profile} 
      onLogin={this.showLock.bind(this)} 
      onLogOut={this.logOut.bind(this)}/>
    } else {
      page = <Home 
      lock ={this.lock}
      accessToken={this.state.accessToken}
      profile={this.state.profile}
      onLogin={this.showLock.bind(this)} 
      onLogOut={this.logOut.bind(this)}/>
    }
    return (
        <div>
          {page}
        </div>
    );
  }
}

export default App;
