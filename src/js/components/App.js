import React from 'react';
import { hot } from 'react-hot-loader';

import Clock from './Clock';
import BreakControls from './BreakControls';
import SessionControls from './SessionControls';
import OtherControls from './OtherControls';
import AudioContainer from '../containers/AudioContainer';

const App = () => (
  <div>
    <Clock />
    <BreakControls />
    <SessionControls />
    <OtherControls />
    <AudioContainer />
  </div>
);

export default hot(module)(App);
