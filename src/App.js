import React, { Component } from 'react';
import TextField from '../node_modules/@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ASK0 from './assets/ASK 0.svg';
import FSK1 from './assets/FSK 1.svg';
import FSK0 from './assets/FSK 0.svg';
import Fab from '@material-ui/core/Fab';
import DIG1 from './assets/Digital 1.svg';
import PSK1 from './assets/PSK 1.svg';
import PSK0 from './assets/PSK 0.svg';
import Popover from '@material-ui/core/Popover';
import './App.css';

class App extends Component {

  state = {
    signal: '',
    condition: [],
    render: false,
    anchorEl: null,
  };

  handleChange = signal => event => {
    this.setState({ signal: event.target.value });
  };

  handleClick = () => {
    const signal = this.state.signal;
    this.setState({
      condition: JSON.parse("[" + signal + "]"),
      render: true
    });
  };

  handleOpen = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  _renderSignal() {
    const condition = this.state.condition
    return (
      <div>
        <div className="row">
          <Card className="card">
            <CardContent>
              <div>
                FSK SIGNAL <br />
                (Frequency Shift Keying)
              </div>
            </CardContent>
            <CardContent>
              <div className="FSK">
                {
                  condition ? (condition.map((data, index) => (
                    <div key={index} className="container">
                      {
                        data === 1 ? (<img src={FSK1} alt='SIGNAL' className="img" />)
                          : data === 0 ? (<img src={FSK0} alt='SIGNAL' className="img" />) : (<div>Undifined</div>)
                      }
                    </div>
                  )
                  )) : (<div>Loading</div>)
                }
              </div>
            </CardContent>
          </Card>
          <Card className="card1">
            <CardContent>
              <div>
                PSK SIGNAL <br />
                (Phase Shift Keying)
              </div>
            </CardContent>
            <CardContent>
              <div className="PSK">
                {
                  condition ? (condition.map((data, index) => (
                    <div key={index} className="container">
                      {
                        data === 1 ? (<img src={PSK1} alt='SIGNAL' className="img" />)
                          : data === 0 ? (<img src={PSK0} alt='SIGNAL' className="img" />) : (<div>Undifined</div>)
                      }
                    </div>
                  )
                  )) : (<div>Loading</div>)
                }
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="row">
          <Card className="card1">
            <CardContent>
              <div>
                ASK SIGNAL <br />
                (Amplitude Shift Keying)
              </div>
            </CardContent>
            <CardContent>
              <div className="ASK">
                {
                  condition ? (condition.map((data, index) => (
                    <div key={index} className="container">
                      {
                        data === 1 ? (<img src={PSK1} alt='SIGNAL' className="img" />)
                          : data === 0 ? (<img src={ASK0} alt='SIGNAL' className="imgask" />) : (<div>Undifined</div>)
                      }
                    </div>
                  )
                  )) : (<div>Loading</div>)
                }
              </div>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <div>
                Digital Information Signal
              </div>
            </CardContent>
            <CardContent>
              <div className="Digital">
                {
                  condition ? (condition.map((data, index) => (
                    <div key={index} className="container">
                      {
                        data === 1 ? (<img src={DIG1} alt='SIGNAL' className="img" />)
                          : data === 0 ? (<img src={ASK0} alt='SIGNAL' className="img" />) : (<div>Undifined</div>)
                      }
                    </div>
                  )
                  )) : (<div>Loading</div>)
                }
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  render() {
    const { render, anchorEl } = this.state
    const open = Boolean(anchorEl);
    return (
      <div>
        <div className="header">SIGNAL CONVERTER APPLICATION</div>
        <div className="App">
          <div className="menu">
            <Card className="input">
              <div className="textField">
                <TextField
                  id="standard-name"
                  label="Signal Value"
                  value={this.state.signal}
                  onChange={this.handleChange('signal')}
                  margin="normal"
                />
              </div>
              <div className="NB">
                *Please insert value in correct format.Clik the instruction button
        </div>
              <div className="button">
                <Button variant="contained" color="primary" onClick={this.handleClick}>
                  Convert
         </Button>
              </div>
            </Card>
            <Fab
              size="small"
              color="primary"
              aria-label="instruction"
              aria-owns={open ? 'simple-popper' : undefined}
              aria-haspopup="true"
              variant="contained"
              onClick={this.handleOpen}
            >
              ?
        </Fab>
            <Popover
              id="simple-popper"
              open={open}
              anchorEl={anchorEl}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <Card className="pop">
                <CardContent className="head">Instruction</CardContent>
                <CardContent>
                  To insert value please follow
                this format <br /> (EX : 1,0,1,0)
              </CardContent>
              </Card>
            </Popover>
          </div>
          {
            render === true ? (<div>{this._renderSignal()}</div>) : (<div />)
          }
        </div>
        <div className="footer">&copy; 2019 TEFA CLASS #LWX </div>
      </div>
    );
  }
}

export default App;
