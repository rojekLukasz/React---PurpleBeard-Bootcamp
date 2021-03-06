import React, { useContext } from 'react';

import { AppContext } from './Week10_HW_Wordle';

function Letter({letterPos, attemptVal}) {
  const { board } = useContext(AppContext)
  const letter = board[attemptVal][letterPos];
  return <div className='letter'>{letter}</div>;
}

export default Letter;
