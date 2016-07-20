import React from 'react';
import { handleRecoverPassword } from '../../modules/recover-password';
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


export class RecoverPassword extends React.Component {


  constructor(props) {
    super(props);
    this.state = { canSubmit: false }
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  submit(data) {
    let email = data.emailAddress;
    handleRecoverPassword(email);
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
            bodyStyle={styles.snackBar} 
            open={true}
            autoHideDuration={7000}
            message="Enter your email address to receive a link to reset your password." 
        />
      <CardTitle title="Recover Password" />
        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
          <FormsyText floatingLabelText="Email" style={styles.textField} value="" name="emailAddress" validations="isEmail" validationError="This is not a valid email" required />
          <CardActions >
            <RaisedButton type="submit" secondary={true} label="Recover Password" disabled={!this.state.canSubmit} />
          </CardActions>
        </Formsy.Form>
      </Card>
    );
  }
}


/*export class RecoverPassword extends React.Component {
  componentDidMount() {
    handleRecoverPassword({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Recover Password</h4>
        <Alert bsStyle="info">
          Enter your email address below to receive a link to reset your password.
        </Alert>
        <form ref="recoverPassword" className="recover-password" onSubmit={ this.handleSubmit }>
          <FormGroup>
            <FormControl
              type="email"
              ref="emailAddress"
              name="emailAddress"
              placeholder="Email Address"
            />
          </FormGroup>
          <Button type="submit" bsStyle="success">Recover Password</Button>
        </form>
      </Col>
    </Row>;
  }
}*/
