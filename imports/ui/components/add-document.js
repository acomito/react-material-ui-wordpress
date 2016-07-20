import React from 'react';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertDocument } from '../../api/documents/methods.js';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Formsy from 'formsy-react';
import Dialog from 'material-ui/Dialog';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';



  const styles = {
    cardStyles: {
      width: "100%",
      margin: "40px auto",
      padding: "10px"
    },
    cardActionStyles: {
      width: "15%",
      display: "inline-block",
    },
    fieldStyle: {
      display: "block",
      width: "90%",
      marginBottom: "25px"
    },
    buttonStyles: {
      marginLeft: "10px"
    },
    actionContainer:{
      display: "inline",
      marginLeft: "10px",
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

export class AddDocument extends React.Component {

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

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  submit(data, resetForm) {
      
      let title = data.document.trim();

      const closeModal = () => {
        this.setState({ open: false, canSubmit: false });
      };

      insertDocument.call({title}, (error) => {   
          if (error) { Bert.alert(error.reason, 'danger'); return; }
          //else
          Bert.alert('Document added!', 'success');
          closeModal();
          return;
      });
  }

  handleClose() {
    this.setState({open: false});
  }


render() {

    return (
      <div>
        <FloatingActionButton style={styles.floatingButton} secondary={true} onTouchTap={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog modal={false} open={this.state.open} onRequestClose={this.handleClose} title="Add Document" modal={true}>
          <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} ref="form">
            <FormsyText 
                floatingLabelText="Document"
                style={styles.fieldStyle}
                name="document" 
                required 
            />
            <RaisedButton style={styles.buttonStyles} type="submit" secondary={true} label="Add Document" disabled={!this.state.canSubmit} />
            <RaisedButton style={styles.buttonStyles} label="Cancel" onTouchTap={this.handleClose} />  
        </Formsy.Form>
        </Dialog>
      </div>
    );
  }
}

/*export class AddDocument extends React.Component {

  constructor(props) {
    super(props);
    this.state = { canSubmit: false };
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }


  submit(data, resetForm) {
      
      let title = data.document.trim();

      insertDocument.call({title}, (error) => {   
          if (error) { Bert.alert(error.reason, 'danger'); return; }
          //else
          Bert.alert('Document added!', 'success');
          input.setState({ value: '' });
          return;
      });
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
        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} ref="form">
          <FormsyText ref={(node) => {input = node}} floatingLabelText="Document" style={styles.textField} name="document" required />
          <CardActions style={styles.cardActionStyles}>
            <RaisedButton type="submit" secondary={true} label="Add Document" disabled={!this.state.canSubmit} />
          </CardActions>
        </Formsy.Form>
      </Card>
    );
  }
}*/


/*export const AddDocument = () => (
  <FormGroup>
    <FormControl
      type="text"
      onKeyUp={ handleInsertDocument }
      placeholder="Type a document title and press enter..."
    />
  </FormGroup>
);*/
