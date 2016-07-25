import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import 'flexboxgrid';

styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
	containerDiv: {
		margin: "100px",
	},
	sectionOne: {
		backgroundColor: "#FF4081"
	}
}

export const Index = () => (
  <div>
	  <div style={{backgroundColor: "#00BCCD", padding: "100px 0px"}}>
		  <div className="row center-xs middle-xs" style={{paddingBottom:"100px"}} >
				  <div className="box">
				  	<h1 style={{color: "#ffffff"}}>Base Material-UI with WordPress</h1>
				    <p style={{color: "#ffffff"}}>A Material-UI starting point for Meteor/React applications.</p>
					<RaisedButton style={styles.raisedButtons} secondary={true} label="Material-UI Base Documentation" href="https://github.com/acomito/base" />
				    <RaisedButton style={styles.raisedButtons} label="Original Base Documentation" href="https://themeteorchef.com/base" />
				  </div>
		  </div>
		  <div className="row center-xs" style={{backgroundColor: "#EEEEEE", minHeight: 600, color: "#616161"}}>
				  <div className="box" >
				  	<h2 style={{fontWeight: 300, marginTop: 50}}>What We Do</h2>
				  </div>
		  </div>
		  <div className="row center-xs middle-xs" style={{backgroundColor: "#ffffff", minHeight: 400, color: "#616161", padding: "30px 100px"}}>
				  <div className="box" >
				  	<h2 style={{fontWeight: 200}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus urna vel ex hendrerit, vel sodales turpis sodales. Nunc est ante, semper quis molestie ac, porttitor eu lectus. Suspendisse potenti. Vivamus ultricies viverra pharetra. Curabitur efficitur lectus sit amet facilisis aliquam. Vivamus congue a sem hendrerit laoreet.</h2>
				  	<RaisedButton style={styles.raisedButtons} secondary={true} label="Get Started" href="https://github.com/acomito/base" />
				  </div>
		  </div>
		  <div className="row middle-xs" style={{backgroundColor: "#00BCCD", minHeight: 200, color: "#616161"}}>
		  	<div className="col-xs-12 col-sm-7">
			  	<div className="box" >
			  			<h1 style={{color: "#ffffff"}}>Lets Get Funky</h1>
					  	<h3 style={{fontWeight: 200, color: "#ffffff"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus urna vel ex hendrerit, vel sodales turpis sodales. Nunc est ante, semper quis molestie ac, porttitor eu lectus. Suspendisse potenti. Vivamus ultricies viverra pharetra.</h3>
					  </div>
			  	</div>
		  	<div className="col-xs-12 col-sm-5 center-xs middle-xs">
		  		<div className="box" >
		  			<RaisedButton secondary={true} label="Get Funky" href="https://github.com/acomito/base" />
		  		</div>
		  	</div>
		  
		  </div>
	  </div>
	  <div style={{backgroundColor: "#263238", padding: "50px 0px"}}>
	  	<h2 style={{color: "#ffffff"}}>DA FOOTER</h2>
	  </div>
  </div>
);
