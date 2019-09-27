import React from 'react'
import ToDoListItem from '../ToDoListItem'
import './ToDoList.css'

const ToDoList = ({ todos }) => {

        const ToDoElement = todos.map(el => {

        let {id, ...itemstodos} = el;

        return (
            <li key={id} className="list-group-item"><ToDoListItem {...itemstodos} />
             </li>
        )
    }

    )

    return (
        <ul className="list-group todo-list">
            {ToDoElement}
        </ul>
    )
}

export default ToDoList;