import React from 'react';
import { connect } from 'react-redux';

const play = () => {
  const sound = document.getElementById('clock_sound');
  sound.currentTime = 0;
  sound.play();
};

const AudioContainer = (props) => {
  if (props.clockReducer.currentTime === '00:00') {
    play();
  }
  return (
    <React.Fragment>
      <audio id="clock_sound" src={props.clockReducer.audioSource} />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  clockReducer: state.clockReducer,
});

export default connect(mapStateToProps, null)(AudioContainer);
