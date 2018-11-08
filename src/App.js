import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './routes/home';
import login from './routes/login';
import dashboard from './routes/dashboard';
import Error from './routes/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
              <Route path="/" component={home} exact />
              <Route path="/login" component={login} />
              <Route path="/dashboard" component={dashboard} />
              <Route  component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
