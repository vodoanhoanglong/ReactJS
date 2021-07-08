import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Counter from './components/Counter';



function App()
{
  return(
    <div className='App'>
      <Counter />
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);