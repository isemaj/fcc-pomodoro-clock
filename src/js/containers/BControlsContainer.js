import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increaseBreak, decreaseBreak } from '../actions/index';

const BControlsContainer = (props) => {
  const timeStatus = props.clockReducer.timeStatus === 'playing' ? true : false;
  return (
    <React.Fragment>
      <h3>{props.clockReducer.breakLength}</h3>
      <button id="break-increment" type="button" disabled={timeStatus} onClick={() => props.increaseBreak()}>Up</button>
      <button id="break-decrement" type="button" disabled={timeStatus} onClick={() => props.decreaseBreak()}>Down</button>
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
