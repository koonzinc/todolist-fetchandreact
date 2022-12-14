import React, { useState } from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

       props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            label: input,
            done: false
        });

        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Add a todo' 
            value={input} 
            name="text" 
            className='todo-input' 
            onChange={handleChange}
            />
            <button type='submit' className='todo-button'>+</button>
        </form>
    )
}

export default TodoForm
