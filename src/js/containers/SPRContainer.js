import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { playPause, reset } from '../actions/index';

const SPRContainer = (props) => {
  return (
    <React.Fragment>
      <button id="start_stop" onClick={() => props.playPause()}>
        {props.clockReducer.timeStatus === 'playing' ?
          <FontAwesomeIcon icon="pause" size="5x"/>
          :
          <FontAwesomeIcon icon="play" size="5x"/>
        }
      </button>
      <button id="reset" onClick={() => props.reset()}>
        <FontAwesomeIcon icon="undo" size="5x" /> 
      </button>
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
