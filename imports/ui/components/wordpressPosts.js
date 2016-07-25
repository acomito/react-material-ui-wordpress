import React from 'react';
import { WordpressPost } from './wordpress-post.js';
import { IndividualWordpressPost } from './individual-wordpress-post.js';
import 'flexboxgrid';

const styles = {
	cardList: {
    padding: "40px"
	}
};

export class WordpressPostsList extends React.Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = { open: false, doc: {} };      
  }

  handleOpen(doc) {
      this.setState({ open: true, doc: doc });
  }

  handleClose() {
    this.setState({ open: false, doc: {} });
  }

  render() {
    return this.props.documents.length > 0 
            ? <div style={styles.cardList} className="row">
                {this.state.open
                  ? <IndividualWordpressPost key={ this.state.doc.id } document={ this.state.doc } handleClose={this.handleClose} />
                  : this.props.documents.map((doc) => ( 
                        <div className="col-xs-12 col-sm-6 col-md-4">
                          <div className="box">
                            <WordpressPost key={ doc.id } images={this.props.images} document={ doc } handleOpen={this.handleOpen} /> 
                          </div>
                        </div>
                    ))
                }
              </div> 
          : <div>No documents yet.</div>
  }

}



