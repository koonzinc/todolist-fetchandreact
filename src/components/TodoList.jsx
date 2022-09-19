import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }


  return (
    <div className='todo-list-container'>
        <h1 className='todo-list-header'>What needs to get done?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} removeTodo={removeTodo} />
        {todos.length === 0 ? <p>No tasks, add a task</p> : <p>{todos.length} tasks left</p>}
    </div>
  )
}

export default TodoList