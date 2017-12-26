import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import 'font-awesome/scss/font-awesome.scss';

import { ChatListPage, ChatPage, SearchPage } from './pages';

class App extends Component {
  render() {
      return (
        <div>
            <Route exact path="/chatList" component={ChatListPage} />
            <Route exact path="/chat" component={ChatPage} />
            <Route path="/findSummoner" component={SearchPage} />
        </div>
      );
  }
}

export default App;
