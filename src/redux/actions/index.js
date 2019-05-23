import {UPDATE_VALUE, SAVE_TODO} from './actionTypes';

export const updateValue = (value) =>{
    return{
        type: UPDATE_VALUE,
        payload: value
    }
}

export const saveTodo = () =>{
  console.log("Save Todo en Index.js de actions");
  return{
      type: SAVE_TODO,
      payload: ""
  }
}


/*
deleteTodo = (index) => {
  const todos = this.state.todos;
  todos.splice(index,1);
  this.setState({
    todos
  });
}

toggleCompleted = (index) => {
  const todos = this.state.todos;
  todos[index].completed = !todos[index].completed;
  this.setState({
    todos
  });
  console.log(this.state.todos);
}*/


