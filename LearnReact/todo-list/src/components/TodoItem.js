import React, { Component } from 'react';
import classNames from 'classnames';


import './TodoItem.css'
import checkImg from '../img/check.svg';
import checkDoneImg from '../img/check-done.svg';

class TodoItem extends Component
{
    render()
    {
        const {item, onClick} = this.props;
        let url = checkImg;
        if(item.isActive)
            url = checkDoneImg;
        return(
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isActive
            })}>
                <img src={url} width={32} height={32} onClick={onClick} />
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}


export default TodoItem