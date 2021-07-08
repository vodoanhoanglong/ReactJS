import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import AwesomeImage from './components/AwesomeImage';
import withHoverOpacity from './components/withHoverOpacity';


const HoverOpacityAwesomImage = withHoverOpacity(AwesomeImage, 0.8);

function App()
{
  return (
    <div className='App'>
      <HoverOpacityAwesomImage src="https://picsum.photos/200/300" />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
