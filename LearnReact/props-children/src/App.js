import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Accordion from './components/Accordion'


class App extends Component 
{
  render()
  {
    return (
      <div className='App'>
        <Accordion heading='Heading'>
          Hello, how old are you? {/* this is a children */}
        </Accordion>

      </div>
    )
  }
}

export default App;
