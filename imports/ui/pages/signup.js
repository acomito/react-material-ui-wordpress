import React from 'react';
import { Link } from 'react-router';
/*import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';*/
import { handleSignup } from '../../modules/signup';
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


export class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = { canSubmit: false }
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  submit(data) {
    let firstName = data.firstName;
    let lastName =  data.lastName;
    let emailAddress = data.emailAddress;
    let password = data.password;
    
    handleSignup(firstName, lastName, emailAddress, password );

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
        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <FormsyText floatingLabelText="First Name" style={styles.textField} value="" name="firstName" required />
          <FormsyText floatingLabelText="Last Name" style={styles.textField} value="" name="lastName" required />
          <FormsyText floatingLabelText="Email" style={styles.textField} value="" name="emailAddress" validations="isEmail" validationError="This is not a valid email" required />
          <FormsyText floatingLabelText="Password" style={styles.textField} value="" name="password" type="password" required />
          <CardActions style={styles.cardActionStyles}>
            <RaisedButton type="submit" secondary={true} label="Sign Up" disabled={!this.state.canSubmit} />
            <Link to="/login"><FlatButton label="Already have an account?" /></Link>
          </CardActions>
        </Formsy.Form>
      </Card>
    );
  }
}


/*export class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Sign Up</h4>
        <form ref="signup" className="signup" onSubmit={ this.handleSubmit }>
          <Row>
            <Col xs={ 6 } sm={ 6 }>
              <FormGroup>
                <ControlLabel>First Name</ControlLabel>
                <FormControl
                  type="text"
                  ref="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
              </FormGroup>
            </Col>
            <Col xs={ 6 } sm={ 6 }>
              <FormGroup>
                <ControlLabel>Last Name</ControlLabel>
                <FormControl
                  type="text"
                  ref="lastName"
                  name="lastName"
                  placeholder="Last Name"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <ControlLabel>Email Address</ControlLabel>
            <FormControl
              type="text"
              ref="emailAddress"
              name="emailAddress"
              placeholder="Email Address"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
            />
          </FormGroup>
          <Button type="submit" bsStyle="success">Sign Up</Button>
        </form>
        <p>Already have an account? <Link to="/login">Log In</Link>.</p>
      </Col>
    </Row>;
  }
}*/
