import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import { SideNav } from './side-nav'

const styles = {
  AppNavigation: {
    color: "#ffffff",
  },
  titleLink: {
    textDecoration: "none",
    color: "#ffffff"
  },
  navLink: {
    color: "#ffffff"
  }
}

const NavLinks = function(){
  return  <div className="navLinks">
            <Link to="/" >
              <FlatButton style={styles.navLink} label="Home" />
            </Link>
            <Link to="/about" >
              <FlatButton style={styles.navLink} label="About" />
            </Link>
            <Link to="/posts" >
              <FlatButton style={styles.navLink} label="Blog" />
            </Link>
            <Link to="/contact"  >
              <FlatButton style={styles.navLink} label="Contact" />
            </Link>
          </div>
};

export class AppNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose(){
    this.setState({open: false});
  } 

  render() {
    return <div>
            <AppBar
              title={<Link to="/" style={styles.titleLink}>Company Logo</Link>}
              zDepth={0}
              style={styles.AppNavigation}
              iconElementRight={<NavLinks className="navLinks" />}
              onLeftIconButtonTouchTap={this.handleToggle}
            />
            <SideNav isOpen={this.state.open} close={this.handleClose}/>
            </div>
  }
}


