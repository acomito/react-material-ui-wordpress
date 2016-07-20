import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { PublicNavigation } from './public-navigation';
import { AuthenticatedNavigation } from './authenticated-navigation';
import AppBar from 'material-ui/AppBar';

const styles = {
  AppNavigation: {
    color: "#ffffff",
  },
  titleLink: {
    textDecoration: "none",
    color: "#ffffff"
  },
}

export class AppNavigation extends React.Component {
  renderNavigation(hasUser) {
    return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />;
  }

  render() {
    return <AppBar 
              title={<Link to="/" style={styles.titleLink}>Application Name</Link>}
              showMenuIconButton={false}
              style={styles.AppNavigation}
              iconElementRight={ this.renderNavigation(this.props.hasUser)} 
            />
  }
}

{/*export class AppNavigation extends React.Component {
  renderNavigation(hasUser) {
    return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />;
  }

  render() {
    return <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Application Name</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        { this.renderNavigation(this.props.hasUser) }
      </Navbar.Collapse>
    </Navbar>;
  }
}*/}

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};
