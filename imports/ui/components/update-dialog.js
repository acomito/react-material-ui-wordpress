import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';


 const styles= {
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
  }
 };


export default class UpdateDialog extends React.Component {

   constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.updateItem = this.updateItem.bind(this);
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

  updateItem() {
    this.props.updateMethod();
    this.setState({open: false});
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  submit(data) {

    let docId = this.props.docToUpdate._id;
    let title = data.document;
    this.props.updateMethod(docId, title);
    this.setState({open: false});

  }

  handleClose() {
    this.setState({open: false});
  }

  render() {

    return (
      <div style={styles.actionContainer}>
        <RaisedButton label="Update" onTouchTap={this.handleOpen} />
        <Dialog modal={false} open={this.state.open} onRequestClose={this.handleClose} title="Update Document" modal={true}>
          <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} ref="form">
            <FormsyText 
              floatingLabelText="Document" 
              style={styles.fieldStyle}
              defaultValue={this.props.docToUpdate.title} 
              name="document" 
              required 
            />
            <RaisedButton style={styles.buttonStyles} type="submit" secondary={true} onClick={this.resetForm} label="Save" disabled={!this.state.canSubmit} />
            <RaisedButton style={styles.buttonStyles} label="Cancel" onTouchTap={this.handleClose} />  
          </Formsy.Form>
        </Dialog>
      </div>
    );
  }
}
