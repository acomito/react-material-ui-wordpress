import $ from 'jquery';
import 'jquery-validation';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from './get-input-value';


const handleRecovery = (email) => {
  Accounts.forgotPassword({
    email: email,
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'warning');
    } else {
      Bert.alert('Check your inbox for a reset link!', 'success');
    }
  });
};


export const handleRecoverPassword = (email) => {
  handleRecovery(email);
};
