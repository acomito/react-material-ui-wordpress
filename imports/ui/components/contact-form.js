import React from 'react';
import { Bert } from 'meteor/themeteorchef:bert';
import FloatingActionButton  from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog  from 'material-ui/Dialog';
import Mail from 'material-ui/svg-icons/content/mail';
import Formsy from 'formsy-react';
import { FormsySelect, FormsyText } from 'formsy-material-ui/lib';



const styles = {
    containerDiv: {
      zIndex: 1000
    },
    fieldStyle: {
      display: "block",
      width: "90%",
      marginBottom: "25px"
    },
    buttonStyles: {
      marginLeft: "10px",
      marginTop: "20px",
      marginBottom: "10px"
    },
    floatingButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    }
}

export class ContactForm extends React.Component {

   constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      open: false,
      canSubmit: false,
    };      
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  submit(data, resetForm) {
      console.log(data);
      this.setState({open: false});
  }




render() {

    return (
      <div style={styles.containerDiv}>
        <FloatingActionButton style={styles.floatingButton} secondary={true} onTouchTap={this.handleOpen}>
          <Mail />
        </FloatingActionButton>
        <Dialog open={this.state.open} onRequestClose={this.handleClose} title="Contact Me" >
          <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} ref="form">
            <FormsyText 
                floatingLabelText="Your Name"
                style={styles.fieldStyle}
                name="name" 
                required 
            />
            <FormsyText 
                floatingLabelText="Your Email"
                style={styles.fieldStyle}
                name="email" 
                required 
            />
            <FormsyText 
                floatingLabelText="How Can I Help You?"
                style={styles.fieldStyle}
                name="summary" 
                required 
            />
            <RaisedButton style={styles.buttonStyles} type="submit" secondary={true} label="Send Message" disabled={!this.state.canSubmit} />
        </Formsy.Form>
        </Dialog>
      </div>
    );
  }
}
