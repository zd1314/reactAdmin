import React, { Component } from "react";
import { BrowserRouter,HashRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Admin} ></Route>
          </Switch>
        </BrowserRouter>
    )
  }

}
export default App;