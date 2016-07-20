import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';



const signUp = (user) => {

  Accounts.createUser(user, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      browserHistory.push('/');
      Bert.alert('Welcome!', 'success');
    }
  });
};


export const handleSignup = (firstName, lastName, emailAddress, password) => {
  let user = {
        email: emailAddress,
        password: password,
        profile: {
          name: {
            first: firstName,
            last: lastName,
          },
        },
  };
    
    signUp(user);
};
