import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from './get-input-value';


let token;

const handleReset = (newPassword, token) => {
  const password = newPassword;
  Accounts.resetPassword(token, password, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      browserHistory.push('/');
      Bert.alert('Password reset!', 'success');
    }
  });
};

export const handleResetPassword = (newPassword, repeatNewPassword, token) => {
  token = token;
  handleReset(newPassword, repeatNewPassword, token);
};
