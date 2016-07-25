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

export const About = () => (
  <div className="row center-xs middle-xs" style={styles.containerDiv}>
		  <div className="box">
		  	<h2>About</h2>
		  </div>
  </div>
);
