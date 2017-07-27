import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Containers
import BaseLayout from './containers/BaseLayout';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import About from './containers/About';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: "",
      routes: [{
        order: 2,
        label: "About",
        path: "/about",
        component: About,
        bg: "/bert.jpg"
      },{
        order: 3,
        label: "Portfolio",
        path: "/portfolio",
        component: Portfolio,
        bg: "/oscarAbby.jpg"
      },{
        order: 1,
        label: "Home",
        path: "/",
        component: Home,
        bg: "/elmo.jpg"
      }]
    };
  }

  setCurrent = (page) => {
    this.setState({current: page});
  }
  
  render() {
    let routes = this.state.routes.map((e, i) =>{
      return (
        <Route key={i} path = {e.path} component={e.component}/>
      );
    });
    
    return (
      <BrowserRouter>
        <BaseLayout routes={this.state.routes} setCurrent={this.setCurrent}>
          <Switch>
            {routes}
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
