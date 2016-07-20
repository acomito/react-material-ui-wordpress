import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updateDocument, removeDocument } from '../../api/documents/methods.js';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DeleteDialog from './delete-dialog.js';
import UpdateDialog from './update-dialog.js';



const handleUpdateDocument = (documentId, title) => {

    updateDocument.call({_id: documentId, update: { title }, }, (error) => {
      if (error) { Bert.alert(error.reason, 'danger'); return; }
      Bert.alert('Document updated!', 'success');
    });

};

const handleRemoveDocument = (documentId) => {

    removeDocument.call({ _id: documentId, }, (error) => {
      if (error) { Bert.alert(error.reason, 'danger'); return; }
        Bert.alert('Document removed!', 'success');
    });

};

export const Document = ({ document }) => (
  <Card key={ document._id }>
    <CardHeader
      title={document.title}
      subtitle={document._id}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions expandable={true}>
      <UpdateDialog itemType="Document" docToUpdate={{_id: document._id, title: document.title}} updateMethod={handleUpdateDocument.bind(this)} />
      <DeleteDialog itemType="Document" deleteMethod={handleRemoveDocument.bind(this, document._id )} />
    </CardActions>
  </Card>
);


/*export const Document = ({ document }) => (
  <ListGroupItem key={ document._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <FormControl
          type="text"
          standalone
          defaultValue={ document.title }
          onKeyUp={ handleUpdateDocument.bind(this, document._id) }
        />
      </Col>
      <Col xs={ 4 } sm={ 2 }>
        <Button
          bsStyle="danger"
          className="btn-block"
          onClick={ handleRemoveDocument.bind(this, document._id) }>
          Remove
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
);*/
