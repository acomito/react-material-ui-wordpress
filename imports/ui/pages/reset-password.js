import React from 'react';
import { handleResetPassword } from '../../modules/reset-password';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Bert } from 'meteor/themeteorchef:bert';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import Formsy from 'formsy-react';
import Snackbar from 'material-ui/Snackbar';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';

const styles = {
  cardStyles: {
    width: "50%",
    padding: "40px",
    margin: "40px auto",
    marginTop: "40px", 
  },
  textField: {
    width: "90%"
  },
  snackBar: {
    backgroundColor: "#FF4081"
  }
}


export class ResetPassword extends React.Component {


  constructor(props) {
    super(props);
    this.state = { 
      canSubmit: false,
      token: this.props.params.token,
    }
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  submit(data) {
    let newPassword = data.newPassword;
    let repeatNewPassword = data.repeatNewPassword;
    handleResetPassword(newPassword, repeatNewPassword, this.state.token);
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <Card style={styles.cardStyles} >
      <Snackbar
            open={true}
            bodyStyle={styles.snackBar} 
            autoHideDuration={7000}
            message="To reset your password, enter a new one. You will be logged in with your new password." 
        />
      <CardTitle title="Reset Password" />
        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
            <FormsyText 
                floatingLabelText="Password" 
                style={styles.textField} 
                value="" 
                name="newPassword" 
                type="password" 
                required 
            />
            <FormsyText 
            floatingLabelText="Password" 
            validations="equalsField:newPassword"
            validationError="Passwords dont match"
            style={styles.textField}
            value="" 
            name="repeatNewPassword" 
            type="password" required />
          <CardActions >
            <RaisedButton type="submit" secondary={true} label="Reset Password &amp; Login" disabled={!this.state.canSubmit} />
          </CardActions>
        </Formsy.Form>
      </Card>
    );
  }
}







/*export class ResetPassword extends React.Component {
  componentDidMount() {
    handleResetPassword({
      component: this,
      token: this.props.params.token,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Reset Password</h4>
        <Alert bsStyle="info">
          To reset your password, enter a new one below. You will be logged in
with your new password.
        </Alert>
        <form ref="resetPassword" className="reset-password" onSubmit={ this.handleSubmit }>
          <FormGroup>
            <ControlLabel>New Password</ControlLabel>
            <FormControl
              type="password"
              ref="newPassword"
              name="newPassword"
              placeholder="New Password"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Repeat New Password</ControlLabel>
            <FormControl
              type="password"
              ref="repeatNewPassword"
              name="repeatNewPassword"
              placeholder="Repeat New Password"
            />
          </FormGroup>
          <Button type="submit" bsStyle="success">Reset Password &amp; Login</Button>
        </form>
      </Col>
    </Row>;
  }
}

ResetPassword.propTypes = {
  params: React.PropTypes.object,
};*/
