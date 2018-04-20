import React, { Component } from 'react';
import Input from './Input';
import Result from './Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      time: 0,
      open: false
    };
  }

  handleClose = close => {
    this.setState({ open: close });
  };

  handleConvert = (val, tim) => {
    this.setState({ value: val, time: tim });
    this.setState({ open: true });
  };

  render() {
    return (
      <div style={{ backgroundColor: '#f2f2f2', height: '787px' }}>
        <Input onConvert={this.handleConvert} />
        <Result
          onClose={this.handleClose}
          open={this.state.open}
          value={this.state.value}
          time={this.state.time}
        />
      </div>
    );
  }
}

export default App;
