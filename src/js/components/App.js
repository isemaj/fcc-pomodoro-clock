import React from 'react';
import { hot } from 'react-hot-loader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import Clock from './Clock';
import BreakControls from './BreakControls';
import SessionControls from './SessionControls';
import OtherControls from './OtherControls';
import AudioContainer from '../containers/AudioContainer';
import '../../styles/app.scss';

library.add(faCaretUp, faCaretDown);

const App = () => (
  <div className="app">
    <Clock />
    <div className="controls">
      <BreakControls />
      <OtherControls />
      <SessionControls />
      <AudioContainer />
    </div>
  </div>
);

export default hot(module)(App);
