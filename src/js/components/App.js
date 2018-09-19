import React from 'react';
import { hot } from 'react-hot-loader';

import Clock from './Clock';
import BreakControls from './BreakControls';
import SessionControls from './SessionControls';
import OtherControls from './OtherControls';

const App = () => (
  <div>
    <Clock />
    <BreakControls />
    <SessionControls />
    <OtherControls />
  </div>
);

export default hot(module)(App);
