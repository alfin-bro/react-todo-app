import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todo, handlerCheckbox, handlerDelete }) {
    return (
        <>
            {
                todo.map(item => {
                    return (
                        <TodoItem
                            task={item.task}
                            key={item.id}
                            id={item.id}
                            done={item.done}
                            handlerCheckbox={handlerCheckbox}
                            handlerDelete={handlerDelete}
                        />
                    )
                })
            }
        </>
    )
}

export default TodoList
