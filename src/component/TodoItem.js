import React from 'react'
import { ButtonDelete, CheckBox, Li, WrapperItem } from './StyleComponent';



function TodoItem({ task, id, done, handlerCheckbox, handlerDelete }) {
    return (
            <WrapperItem>
                <CheckBox onClick={() => handlerCheckbox(id)} type="checkbox" />
                <ul style={{ textDecoration: done ? "line-through" : "none", alignItems: "center", padding: "0", margin: "0" }}>
                    <Li>
                        {task}
                    </Li>
                </ul>
                <ButtonDelete onClick={() => handlerDelete(id)}>x</ButtonDelete>
            </WrapperItem>

    )
}

export default TodoItem;
