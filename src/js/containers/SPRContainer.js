import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { startSession, pauseSession, reset } from '../actions/index';

let interval = null;

const teststart = (props) => {
  interval = setInterval(() => {
    console.log('1');
  }, 1000);
};

const testreset = (props) => {
  clearInterval(interval);
};

const SPRContainer = (props) => {
  return (
    <React.Fragment>
      <button id="start_stop" onClick={() => props.startSession()}>Start/Pause</button>
      <button id="reset" onClick={() => props.reset()}>Reset</button>
      <button onClick={() => teststart(props)}>Test Start</button>
      <button onClick={() => testreset(props)}>Test Stop</button>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  clockReducer: state.clockReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  startSession,
  pauseSession,
  reset,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SPRContainer);
