import React from 'react'

const Todo = (props) => {
    const todoClasses = ["bold"];
    if (props.todo.complete) {
        todoClasses.push("line-thru");
    }
    return (
        <div>
            <input onChange={(event) => {
                props.toggleCheckbox(props.idx);
            }} checked={props.todo.complete} type="checkbox"></input>
            <span className={todoClasses.join(" ")}>{props.todo.text}</span>
            <button onClick={(event) => {
                props.toDoDelete(props.idx);
            }} style={{ marginLeft: "10px" }}>Delete</button>
        </div>
    )
}

export default Todo