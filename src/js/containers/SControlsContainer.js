import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increaseSession, decreaseSession } from '../actions/index';

const SControlsContainer = (props) => {
  return (
    <React.Fragment>
      <h3>{props.clockReducer.sessionLength}</h3>
      <button id="session-increment" onClick={() => props.increaseSession()}>Up</button>
      <button id="session-decrement" onClick={() => props.decreaseSession()}>Down</button>
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
