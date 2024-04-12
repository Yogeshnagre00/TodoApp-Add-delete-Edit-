import React,{useState} from "react";
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  
  const addList =(inputText) => {
    if(inputText !== '')
      setListTodo([...listTodo, inputText]);
    
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo, ]);



  }

  const editListItem = (index) => {
    const editedText = prompt("Edit Todo", listTodo[index]);
    if (editedText !== null) {
      const newTodos = [...listTodo];
      newTodos[index] = editedText;
      setListTodo(newTodos);
    }
  }

  
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} /> 
         <h1 className="app-heading">Todo</h1>
         <hr/>
         {listTodo.map((listItem, i) => {
          return (
            <TodoList key = {i} index={i} item = {listItem} deleteItem = {deleteListItem}  editItem = {editListItem} /> 
          )
         }
         )}
      </div>
    </div>
  );
}

export default App;
