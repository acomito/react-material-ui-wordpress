import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const styles = {
  navLink: {
    color: "#ffffff"
  }
}

export const PublicNavigation = () => (
	<div>
    	<Link to="/signup" >
    		<FlatButton style={styles.navLink} label="Signup" />
    	</Link>
    	<Link to="/login"  >
    		<FlatButton style={styles.navLink} label="Login" />
    	</Link>
    </div>
);
