import React from 'react'

function TodoList(props) {
  return (
   <li className="list-item">
    {props.item}
    <span className = "icons">
    <i className="fa-solid fa-trash-can icon-delete"
    onClick= {e =>{
        props.deleteItem(props.index)
    }} > </i>
    <i class="fa-solid fa-pen-to-square icon-edit" 
    onClick = { e =>{
      props.editItem(props.index)
    }}
    ></i>
    
    </span>
   </li>
  )
}

export default TodoList;