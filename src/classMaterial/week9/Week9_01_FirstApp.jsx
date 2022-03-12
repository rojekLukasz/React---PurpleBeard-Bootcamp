import React from 'react';

import CMNavBar from '../_CMNavBar';
import Routing from './FirstApp/components/Routing';
import FirstComponent from './FirstApp/components/FirstComponent'

function Week9_01_FirstApp() {
  return (
    <div className="app-container">
      <CMNavBar />
      <div className="content">
      <Routing/>
      <FirstComponent />
      </div>
      ;
    </div>
  );
}

export default Week9_01_FirstApp;
