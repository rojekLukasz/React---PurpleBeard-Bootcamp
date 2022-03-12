import React from 'react';
import ChildComponents from './ChildComponents';
import './FirstComponentStyles.css';


function FirstComponent() {

const func1 = () => {
  return 10*2;
}

  return (
  <div>
    <h1 style={{color: 'red', backgroundColor: 'blue'}}>First Component</h1>
    <ChildComponents/>
    <p className='parStyle'>
    Lorem ipsum dolor sit amet consectetur adipiscing elit, nisi arcu tortor feugiat lacinia curae purus, neque rhoncus netus scelerisque parturient in. Dui pretium vitae mattis massa sagittis interdum eleifend tristique pellentesque quis, ultricies leo convallis nunc arcu blandit fermentum integer pharetra, lectus montes vestibulum sem non maecenas per vulputate venenatis. Pellentesque aliquet primis aliquam nostra condimentum massa hac cum, potenti erat mauris eget cubilia auctor arcu ullamcorper natoque, id commodo nunc volutpat integer posuere in. Et semper egestas accumsan ad turpis praesent commodo magnis eros, vivamus iaculis ac tincidunt convallis auctor dictumst eget, fermentum ut sed magna non vehicula mi sodales. Blandit posuere cursus senectus porttitor convallis mauris neque ante metus, molestie eu nibh proin tempor lectus
    </p>
    <p>{func1()}</p>

    <button id='btn1'>Hello Click me</button>
  </div>
  );
}

export default FirstComponent;
