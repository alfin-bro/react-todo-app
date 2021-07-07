import React, { useState } from 'react'
import { Container } from './component/StyleComponent'
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'

const App = () => {

  const dummyData = [{
    id: 1,
    task: "Coding",
    done: false,
  }]

  const [todo, setTodo] = useState(dummyData)

  // add todo
  const addTodo = (newTask) => {
    const updateTodo = [...todo, {
      id: Math.floor(Math.random() * 999),
      task: newTask,
      done: false,
    }]
    setTodo(updateTodo);
  }

  //  handlerCheck
  const handlerCheckbox = (id) => {
    const updateTodo = todo.map(item => {
      return (
        item.id === id ? { ...item, done: !item.done } : item)
    })
    setTodo(updateTodo);
  }

  const handlerDelete = id => {
    const updatedTodo = todo.filter(item => {
      return (
        item.id !== id
      );
    })
    setTodo(updatedTodo)
  }

 

  return (
      <Container>
        <TodoForm addTodo={addTodo} />
        <TodoList todo={todo} handlerCheckbox={handlerCheckbox} handlerDelete={handlerDelete} />
      </Container>
  )
}

export default App
