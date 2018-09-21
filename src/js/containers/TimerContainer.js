import React from 'react';
import { connect } from 'react-redux';

const TimerContainer = (props) => {
  return (
    <React.Fragment>
      <div id="time-left">{props.clockReducer.currentTime}</div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  clockReducer: state.clockReducer,
});

export default connect(mapStateToProps, null)(TimerContainer);
