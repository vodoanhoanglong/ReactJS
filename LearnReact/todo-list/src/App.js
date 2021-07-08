import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import { Component } from 'react';
import tick from './img/tick.svg';
 
class App extends Component {
  constructor()
  {
    super();
    this.state = 
    {
      newItem: '',
      currentFilter: 'all', // Tu lam all, active, completed
      todoItems: [
        {title: 'Long1'},
        {title: 'Long2'},
        {title: 'Long3'}
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item)
  {
    return event => {
      const {isActive} = item;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isActive: !isActive
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }

  onKeyUp(event)
  {
    if(event.keyCode === 13) // enter
    {
      let text = event.target.value;
      text = text.trim();
      if(!text) return;
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isActive: false },
          ...this.state.todoItems
        ]
      });
    }
  }

  onChange(event)
  {
    this.setState({ newItem: event.target.value });
  }

  render(){
    const {todoItems, newItem} = this.state;
    if(todoItems.length)
    {
      return (
        <div className="App">
            <div className="Header">
              <img src={tick} width={32} height={32} />
              <input 
              type='text' 
              placeholder="Add a new item" 
              onChange={this.onChange}
              onKeyUp={this.onKeyUp} 
              value={newItem} />
            </div>
          {
            todoItems.length && todoItems.map((item, index) => 
            <TodoItem 
            key={index} 
            item={item} 
            onClick={this.onItemClicked(item)} />)
          }
        </div>
      );
      }else return(<div className='App'>Nothing here</div>);
    }
}

export default App;
