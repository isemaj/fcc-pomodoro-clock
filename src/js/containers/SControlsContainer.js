import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { increaseSession, decreaseSession } from '../actions/index';

const SControlsContainer = (props) => {
  let timeStatus = props.clockReducer.timeStatus === 'playing' ? true : false;
  return (
    <React.Fragment>
      <div className="session-length">{props.clockReducer.sessionLength}</div>
        <div className="session-buttons">
          <button id="session-increment" type="button" disabled={timeStatus} onClick={() => props.increaseSession()}>
            <FontAwesomeIcon icon="caret-up" size="8x"/>
          </button>
          <button id="session-decrement" type="button" disabled={timeStatus} onClick={() => props.decreaseSession()}>
            <FontAwesomeIcon icon="caret-down" size="8x"/>
          </button>
        </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  clockReducer: state.clockReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increaseSession,
  decreaseSession,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SControlsContainer);
