import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from './get-input-value';

let component;

/*const login = (email, password) => {

  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      Bert.alert(error.reason, 'warning');
    } else {
      Bert.alert('Logged in!', 'success');

      const { location } = component.props;
      if (location.state && location.state.nextPathname) {
        browserHistory.push(location.state.nextPathname);
      } else {
        browserHistory.push('/');
      }
    }
  });
};*/


const login = (email, password) => {

  Meteor.loginWithPassword(email, password, (error) => {
    
    if (error) { Bert.alert(error.reason, 'warning'); return; }
    //else
    Bert.alert('Logged in!', 'success');
    browserHistory.push('/');

  });
};


export const handleLogin = (email, password) => {
  login(email, password);
};

