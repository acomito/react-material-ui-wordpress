import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';


const styles = {
  divStyle: {
    marginLeft: "45%",
    marginTop: "25%",
  }
};

export const Loading = () => (
  <div style={styles.divStyle}>
    <CircularProgress />
  </div>
);