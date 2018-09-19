import React from 'react';
import { connect } from 'react-redux';

const TimerLabelContainer = (props) => {
  const { timerType } = props.clockReducer;
  return (
    <React.Fragment>
      <h1 id="timer-label">{timerType}</h1>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  clockReducer: state.clockReducer,
});

export default connect(mapStateToProps, null)(TimerLabelContainer);
