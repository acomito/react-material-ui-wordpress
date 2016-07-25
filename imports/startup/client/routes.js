//Base Packages/Functionality
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
import { Index } from '../../ui/pages/index';
import { WordpressPostsPage } from '../../ui/pages/wordpressPosts';
import { About } from '../../ui/pages/about';
import { Contact } from '../../ui/pages/contact';
import { NotFound } from '../../ui/pages/not-found';

//Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from './theme';





Meteor.startup(() => {
  render(
    <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="posts" path="/posts" component={ WordpressPostsPage } />
        <Route name="about" path="/about" component={ About } />
        <Route name="contact" path="/contact" component={ Contact } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
    </MuiThemeProvider>,
    document.getElementById('react-root')
  );
});
