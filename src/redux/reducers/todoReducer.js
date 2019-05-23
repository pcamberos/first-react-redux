import { UPDATE_VALUE, SAVE_TODO } from "../actions/actionTypes";

const INITIAL_STATE ={
    value: "",
    todos: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_VALUE:
            //console.log(action.payload)
            return{
                ...state,
                value: action.payload
            }
        case SAVE_TODO:
            console.log("SAVE TODO");
            const todo_full = state.todos;
            todo_full.push({
                value: state.value,
                completed: false
            });
            console.log(todo_full);
            return{
                ...state,
                todos: todo_full,
                value: ""
            }
        default:
            return state; 
    }
    
}; 