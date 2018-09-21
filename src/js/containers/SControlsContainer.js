import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increaseSession, decreaseSession } from '../actions/index';

const SControlsContainer = (props) => {
  let timeStatus = props.clockReducer.timeStatus === 'playing' ? true : false;
  return (
    <React.Fragment>
      <h3>{props.clockReducer.sessionLength}</h3>
      <button id="session-increment" type="button" disabled={timeStatus} onClick={() => props.increaseSession()}>Up</button>
      <button id="session-decrement" type="button" disabled={timeStatus} onClick={() => props.decreaseSession()}>Down</button>
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
