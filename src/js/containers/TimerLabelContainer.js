import React from 'react';
import { connect } from 'react-redux';

const TimerLabelContainer = (props) => {
  const { timerType } = props.clockReducer;
  return (
    <React.Fragment>
      <div id="timer-label">{timerType.toUpperCase()}</div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  clockReducer: state.clockReducer,
});

export default connect(mapStateToProps, null)(TimerLabelContainer);
