import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { increaseBreak, decreaseBreak } from '../actions/index';

const BControlsContainer = (props) => {
  const timeStatus = props.clockReducer.timeStatus === 'playing' ? true : false;
  return (
    <React.Fragment>
      <h3>{props.clockReducer.breakLength}</h3>
      <button id="break-increment" type="button" disabled={timeStatus} onClick={() => props.increaseBreak()}>
        <FontAwesomeIcon icon="caret-up" size="3x"/>
      </button>
      <button id="break-decrement" type="button" disabled={timeStatus} onClick={() => props.decreaseBreak()}>
        <FontAwesomeIcon icon="caret-down" size="3x"/>
      </button>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  clockReducer: state.clockReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increaseBreak,
  decreaseBreak,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BControlsContainer);
