import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
	containerDiv: {
		margin: "150px auto 0 auto",
	}
}

export const Index = () => (
  <div className="text-center" style={styles.containerDiv}>
    <h2>Base Material-UI</h2>
    <p>A Material-UI starting point for Meteor/React applications.</p>
	<RaisedButton style={styles.raisedButtons} secondary={true} label="Material-UI Base Documentation" href="https://github.com/acomito/base" />
    <RaisedButton style={styles.raisedButtons} label="Original Base Documentation" href="https://themeteorchef.com/base" />
    <p style={ { fontSize: '14px', color: '#aaa', marginTop: "20px" } }>forked from themeteorchef <a href="https://themeteorchef.com/base">base</a> at v4.5.0</p>
  </div>
);
