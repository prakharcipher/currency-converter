import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

class Result extends Component {
  handleClose = () => {
    this.props.onClose(false);
  };

  render() {
    return (
      <Dialog
        modal={false}
        open={this.props.open}
        onRequestClose={this.handleClose}
      >
        <div style={{ textAlign: 'center' }}>
          <h2>
            <b>Value: </b>
            {this.props.value}
          </h2>
          <h4>
            <b>Timestamp: </b>
            {this.props.time}
          </h4>
        </div>
      </Dialog>
    );
  }
}

export default Result;
