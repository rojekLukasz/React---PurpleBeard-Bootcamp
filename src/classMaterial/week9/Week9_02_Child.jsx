import React from 'react';

function Week9_02_Child() {
  const funcOne = () => {
    alert('Hello Again');
  };

  return (
    <div>
      <button onClick={funcOne}>New click me</button>
    </div>
  );
}

export default Week9_02_Child;
