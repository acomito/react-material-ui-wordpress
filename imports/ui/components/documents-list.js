import React from 'react';
import { Document } from './document.js';

const styles = {
	cardList: {
		marginBottom: "100px",
	}
};

export const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <div style={styles.cardList}>
    {documents.map((doc) => (
      <Document key={ doc._id } document={ doc } />
    ))}
  </div> :
  <div>No documents yet.</div>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};
