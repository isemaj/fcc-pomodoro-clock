import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { test } from '../actions/index';

class TestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1,
    }
  }

  render() {
    console.log(new Date());
    console.log(Date.now());
    console.log(new Date('July 20, 69 00:20:18 GMT+00:00').getTime());
    return (
      <React.Fragment>
        <div>
          <div id="break-label">
            Break Length
          </div>
          <button id="break-increment">Up</button>
          <button id="break-decrement">Down</button>
          <p id="break-length">5</p>
        </div>

        <div>
          <div id="session-label">
            Session Length
          </div>
          <button id="session-increment">Up</button>
          <button id="session-decrement">Down</button>
          <p id="session-length">25</p>
        </div>

        <div>
          <p id="timer-label">Session</p>
          <p id="time-left">TIME LEFT</p>
        </div>

        <div>
          <button id="start_stop">Start/Stop</button>
          <button id="reset">Reset</button>
        </div>

        <audio id="beep" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  test: state.test,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  test,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
