import React, {Component} from 'react';

//Components
import NavigationBar from '../components/NavigationBar.js';

class BaseLayout extends Component {

  render(){
    let styles = {
      base: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%"
      },
      pageWrapper: {
        flex: 1,
        backgroundImage: "url(" + this.props.routes.find( e => { return e.path === window.location.pathname;}).bg + ")",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        position: 'relative'
      },
      page: {
        position: 'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        zIndex: 0,
        boxSizing: 'border-box',
        overflow: 'auto'
      },
      fgStyle:{
        width: 'calc(100% - 20%)',
        height: 'calc(100% - 4rem)',
        left: '10%',
        top: '2rem',
        backgroundColor: 'rgba(255,255,255,.3)',
        padding: '.5rem 10%'
      },
      bgStyle: {
backgroundImage: "url(" + this.props.routes.find( e => { return e.path === window.location.pathname;}).bg + ")",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        clipPath: 'inset(2rem 10% 2rem 10%)',
        filter: 'blur(5px)'
      }
    };


    return(
      <div style={styles.base}>
        <NavigationBar routes={this.props.routes} />
        <div style={styles.pageWrapper}>
          
          <div style={{... styles.page,... styles.bgStyle}} />
          <div style={{... styles.page,... styles.fgStyle}}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default BaseLayout;
