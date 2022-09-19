import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';


const Todo = ({todos, removeTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return todos.map((todo, index) => (
        <div className='todo-row' key={index}>
            <div className='todo-text' key={todo.id}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
                size={25} />
            </div>
        </div>
    ))
}

export default Todo