import React, { useContext } from 'react';

import { AppContext } from './Week10_HW_Wordle';

function Key({keyVal, bigKey}) {
  const { board, setBoard, currAttempt} = useContext(AppContext);

  const selectLetter = () => {
    const newBoard = [...board];
    newBoard[currAttempt.attemp][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
  }
  return <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
    {keyVal}
    </div>;
}

export default Key