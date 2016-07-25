import React from 'react';
import { Bert } from 'meteor/themeteorchef:bert';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { createMarkup } from '../../modules/markdown-helpers.js';

export class IndividualWordpressPost extends React.Component {

	render(){
		return <div>
		<RaisedButton label="Back to Posts" onClick={this.props.handleClose}/>
		<Card key={ this.props.document.id }>
		    <CardHeader title={this.props.document.title.rendered} />
		    <CardText>
		    <div dangerouslySetInnerHTML={createMarkup(this.props.document.content.rendered)} />  
		    </CardText>
		    <CardActions>
		    
		    </CardActions>
		  </Card>
		  </div>
	}
}


