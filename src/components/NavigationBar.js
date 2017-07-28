import React, {Component} from 'react';
import Radium from 'radium';

var NavLink = require('react-router-dom').NavLink;
NavLink = Radium(NavLink);

class NavigationBar extends Component {  
  render(){
    let style = {
      header: {
        height: "2rem",
        background: 'black',
        width: '100%',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      links:{
        color: 'white',
        textDecoration: 'none',
        cursor: 'default',
        ":hover": {
          textDecoration: 'underline'
        }
      }
    };

    let routes = this.props.routes
        .sort((e1, e2)=> {
          return e1.order - e2.order;
        })
        .map((e, i) => {
          return(
              <NavLink  style={style.links} activeStyle={{textDecoration: 'underline'}} key={i} exact to={e.path} >{e.label}</NavLink>
          );
        });
    
    return(
        <div style={style.header}>
        {routes}
      </div>
    );
  }
}

export default Radium(NavigationBar);
