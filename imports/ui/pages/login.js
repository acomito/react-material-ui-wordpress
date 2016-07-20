import React from 'react';
import { Link, browserHistory } from 'react-router';
/*import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';*/
import { handleLogin } from '../../modules/login';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import Formsy from 'formsy-react';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';



  const styles = {
    cardStyles: {
      "width": "40%",
      "margin": "auto",
      "marginTop": "40px",
      "padding": "20px",
      textAlign: "center",
    },
    textField: {
      display: "block",
      width: "70%",
      margin: "auto",
      background: "#ffffff",
      backgroundColor: "#ffffff",
      marginBottom: "20px",
    },
    cardActionStyles: {
      margin: "auto"
    }
  }


export class Login extends React.Component {


  constructor(props) {
    super(props);
    this.state = { canSubmit: false }
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  submit(data) {
    console.log(this.props.location);
    let email = data.emailAddress;
    let password = data.password;
    handleLogin(email, password);
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
      <CardTitle titile="Login" />
        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
          <FormsyText floatingLabelText="Email" style={styles.textField} value="" name="emailAddress" validations="isEmail" validationError="This is not a valid email" required />
          <FormsyText floatingLabelText="Password" style={styles.textField} value="" name="password" type="password" required />
          <CardActions style={styles.cardActionStyles}>
            <RaisedButton type="submit" secondary={true} label="Login" disabled={!this.state.canSubmit} />
            <Link to="/recover-password"><FlatButton label="Forgot Password?" /></Link>
          </CardActions>
        </Formsy.Form>
      </Card>
    );
  }
}



/*export class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Login</h4>
        <form ref="login" className="login" onSubmit={ this.handleSubmit }>
          <FormGroup>
            <ControlLabel>Email Address</ControlLabel>
            <FormControl
              type="email"
              ref="emailAddress"
              name="emailAddress"
              placeholder="Email Address"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              <span className="pull-left">Password</span>
              <Link className="pull-right" to="/recover-password">Forgot Password?</Link>
            </ControlLabel>
            <FormControl
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
            />
          </FormGroup>
          <Button type="submit" bsStyle="success">Login</Button>
        </form>
      </Col>
    </Row>;
  }
}*/
