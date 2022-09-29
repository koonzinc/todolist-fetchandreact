import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.label || /^\s*$/.test(todo.label)) {
            return
        }
        
        fetch('https://assets.breatheco.de/apis/fake/todos/user/koonzinc', {
            method: 'PUT',
            body: JSON.stringify(todos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log(error))

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    }

    const removeTodo = (todo) => {

        fetch('https://assets.breatheco.de/apis/fake/todos/user/koonzinc', {
            method: 'PUT',
            body: JSON.stringify(todos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log(error))

        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }


    useEffect(() => {

        fetch('https://assets.breatheco.de/apis/fake/todos/user/koonzinc')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setTodos(json)
            })
            .catch(error => console.log(error))

        console.log(todos)

    }, [])





    return (
        <div className='todo-list-container'>
            <h1 className='todo-list-header'>What needs to get done?</h1>
            <TodoForm onSubmit={addTodo} />
            {todos.length !== 0 ? <Todo todos={todos} removeTodo={removeTodo} /> : ''}
            {todos.length === 0 ? <p>No tasks, add a task</p> : <p>{todos.length} tasks left</p>}
        </div>
    )
}

export default TodoList