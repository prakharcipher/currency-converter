import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import CircularProgress from 'material-ui/CircularProgress';

const baseURL =
  'https://data.fixer.io/api/convert?access_key=a22225565c9b3d18d2ebb3694ef5f6e4';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      destination: '',
      amount: '',
      error: '',
      display: 'none'
    };
  }

  convertCurrency = () => {
    if (
      this.state.amount === '' ||
      this.state.source === '' ||
      this.state.destination === ''
    ) {
      this.setState({
        error: 'All input fields must be filled'
      });
      return null;
    } else {
      this.setState({ error: '' });
    }

    this.setState({ error: '' });
    this.setState({ display: 'block' });
    const date = new Date();
    const timestamp = date.getTime();
    let url =
      baseURL +
      '&from=' +
      this.state.source +
      '&to=' +
      this.state.destination +
      '&amount=' +
      this.state.amount +
      '&r=' +
      timestamp;
    fetch(url)
      .then(response => {
        this.setState({ display: 'none' });
        return response.json();
      })
      .then(json => {
        json.success === true
          ? this.props.onConvert(json.result, json.info.timestamp)
          : this.setState({
              error: 'Check your inputs and try again',
              display: 'none'
            });
      });
  };

  render() {
    return (
      <div style={{ paddingTop: '20%' }}>
        <div style={{ width: '320px', margin: 'auto' }}>
          <TextField
            floatingLabelText="Amount"
            onChange={event => this.setState({ amount: event.target.value })}
            style={{ width: '100px' }}
          />
          <TextField
            floatingLabelText="From (code)"
            onChange={event => this.setState({ source: event.target.value })}
            maxLength="3"
            style={{ width: '100px', marginLeft: '10px' }}
          />
          <TextField
            floatingLabelText="To (code)"
            onChange={event =>
              this.setState({ destination: event.target.value })
            }
            maxLength="3"
            style={{ width: '100px', marginLeft: '10px' }}
          />
        </div>
        <div style={{ width: '120px', margin: 'auto', marginTop: '2%' }}>
          <RaisedButton
            label="Convert"
            onClick={this.convertCurrency}
            secondary={true}
            style={{ width: '120px' }}
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '1%', color: 'red' }}>
          <b>{this.state.error}</b>
        </div>
        <br />
        <div
          style={{
            display: `${this.state.display}`,
            width: '45px',
            margin: 'auto'
          }}
        >
          <CircularProgress />
        </div>
      </div>
    );
  }
}

export default Input;
