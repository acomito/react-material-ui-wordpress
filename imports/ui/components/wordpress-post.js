import React from 'react';
import { Bert } from 'meteor/themeteorchef:bert';
import {Card, CardActions, CardHeader, CardTitle, CardMedia, CardText} from 'material-ui/Card';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { createMarkup } from '../../modules/markdown-helpers.js';
import { getImage } from '../../modules/getImage.js';


export const WordpressPost = function({document, handleOpen, images}){ 
    return <Card key={ document.id }>
              {/*<CardHeader title={document.title.rendered} />*/}
              <CardMedia overlay={<CardTitle title={document.title.rendered} subtitle="Overlay subtitle" />} >
			     <img src={getImage(document, images)} />
			    </CardMedia>
              <CardText>
              <div dangerouslySetInnerHTML={createMarkup(document.excerpt.rendered)} />  
              </CardText>
              <CardActions>
                <FlatButton label="Read More" onClick={() => { handleOpen(document) }} />
              </CardActions>
        </Card>
}
