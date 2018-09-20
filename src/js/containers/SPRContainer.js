import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { playPause, reset } from '../actions/index';

const SPRContainer = (props) => {
  return (
    <React.Fragment>
      <button id="start_stop" onClick={() => props.playPause()}>Start/Pause</button>
      <button id="reset" onClick={() => props.reset()}>Reset</button>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  clockReducer: state.clockReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  playPause,
  reset,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SPRContainer);
