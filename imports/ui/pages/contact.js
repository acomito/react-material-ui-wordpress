import React from 'react';
import 'flexboxgrid';

styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
	containerDiv: {
		margin: "100px",
	}
}

export const Contact = () => (
  <div className="row center-xs middle-xs" style={styles.containerDiv}>
		  <div className="box">
		  	<h2>Contact</h2>
		  </div>
  </div>
);