import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/search" component={Search}></Route>
              <Route path="/detail/:id" component={Detail}></Route>
              <Route render={() => <div>일치하는 페이지가 없음</div>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
