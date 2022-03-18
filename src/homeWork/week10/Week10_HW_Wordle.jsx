import React, { useState, createContext } from 'react';

import './stylesheet.css'
import HWNavBar from '../_HWNavBar';
import Board from './Board';
import Keyboard from './Keyboard';
import { boardDefault } from './Words';

export const AppContext = createContext()

function Week10_HW_Wordle() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({attemp: 0, letterPos: 0})
  return (
    <div className="app-container">
      <HWNavBar />
      <div id='wordleApp' className="content">
        <nav id='wordleNav'><h1>Wordle</h1></nav>
        <AppContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt}} >
          <div className='game'>
          <Board />
          <Keyboard />
          </div>
        </AppContext.Provider>
      </div>;
    </div>
  );
}

export default Week10_HW_Wordle;
