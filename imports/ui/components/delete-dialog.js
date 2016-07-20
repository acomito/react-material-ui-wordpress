import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Delete from 'material-ui/svg-icons/action/delete';


 const styles= {
    FloatingActionButton: {
      marginLeft: "0px",
    },
    DeleteButton: {
      color: "#EF5350",
    },
    h2: {
      textAlign: "center",
    },
    text: {
      textAlign: "center",
      marginBottom: "20px"
    },
        actionContainer:{
    display: "inline",
    marginLeft: "10px",
  }
 };


export default class DialogDelete extends React.Component {

   constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      open: false,
    };      
  }

  handleOpen() {
    this.setState({open: true});
  }

  deleteItem() {
    this.props.deleteMethod();
    this.setState({open: false});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Delete This."
        primary={true}
        onTouchTap={this.deleteItem}
        labelStyle={styles.DeleteButton}
      />,
    ];

    return (
      <div style={styles.actionContainer}>
        <RaisedButton label="Delete" style={styles.DeleteButton} labelPosition="before" onTouchTap={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <h2 style={styles.h2}>Are You Sure?</h2> 
          <p style={styles.text}>Deleting this {this.props.itemType} is permanent.</p>
        </Dialog>
      </div>
    );
  }
}
