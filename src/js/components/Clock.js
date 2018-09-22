import React from 'react';

import TimerLabelContainer from '../containers/TimerLabelContainer';
import TimerContainer from '../containers/TimerContainer';

const Clock = () => (
  <div className="clock">
    <TimerLabelContainer />
    <TimerContainer />
  </div>
);

export default Clock;
