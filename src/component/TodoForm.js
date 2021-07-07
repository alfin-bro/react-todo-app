import React from 'react'
import State from '../Hooks/State'
import { Input, Title } from './StyleComponent'
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body{
    background-color: #FC5185;
    z-index:0;
  }
  `

function TodoForm({ addTodo }) {
    const [value, handleChange, resetInput] = State()
    const submitHandler = (e) => {
        e.preventDefault()
        addTodo(value)
        resetInput()
    }
    return (
        <>
            <GlobalStyle />
            <Title>Todo App</Title>
            <form onSubmit={submitHandler}>
                <Input onChange={handleChange} className="p-3" type="text" name="todoInput" value={value} />
            </form>
        </>
    )
}

export default TodoForm
