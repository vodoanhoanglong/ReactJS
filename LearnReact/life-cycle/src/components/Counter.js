import React, { Component } from 'react';

class Counter extends Component
{
    constructor(props)
    {
        console.log('Counter constructor');
        super(props);
        this.state = { count: 0 };
    }

    increase()
    {
        this.setState({
            count: this.state.count + 1
         });
    }

    decrease()
    {
        this.setState({
            count: this.state.count - 1
        })
    }

    render()
    {
        console.log('Counter render');
        return (
            <div className='counter'>
                <button onClick={ () => this.decrease() }>-</button>
                <span> { this.state.count }</span>
                <button onClick={() => this.increase()}>+</button>
            </div>
        );
    }
    // những func dưới đây là life cycle
    componentDidMount()
    {
        console.log('Counter did mount');
    }

    componentDidUpdate()
    {
        console.log('Counter did update');
    }

    componentWillUnmount()
    {
        console.log('Counter will unmount');
    }
    
    // hàm này dùng để k render những cái k cần thiết -> tối ưu app
    // hàm này lun trả vè true nếu trả về false sẽ k render ra
    shouldComponentUpdate(nextProps, nextState)
    {
        if(this.state.count === nextState.count)
            return false;
        return true;
    }
}

export default Counter;