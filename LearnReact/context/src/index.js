import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import RandomNumber from './components/RandomNumber';
import {NumberProvider} from './contexts/NumberContext';


function App()
{
  return (
    <NumberProvider>
      <div className='App'>
        <RandomNumber />
      </div>
    </NumberProvider>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

