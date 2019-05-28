import { UPDATE_VALUE, SAVE_TODO, TOGGLE_COMPLETED, DELETE_TODO } from "../actions/actionTypes";

const INITIAL_STATE ={
    value: "",
    todos: []
}

export default (state = INITIAL_STATE, action) => {
    let todos = JSON.parse(JSON.stringify(state.todos))

    switch (action.type) {
        case UPDATE_VALUE:
            return{
                ...state,
                value: action.payload
            }
        case SAVE_TODO:
            //let todo_full = state.todos;
            todos.push({
                value: state.value,
                completed: false
            });
            return{
                ...state,
                todos,
                value: ""
            }
        case TOGGLE_COMPLETED:
            //let todo_full2 = state.todos;
            todos[action.payload].completed = !todos[action.payload].completed;
            return{
                ...state,
                todos,
                value: ""
            }
        case DELETE_TODO:
            //let todo_full3 = state.todos;
            todos.splice(action.payload, 1);
            return{
                ...state,
                todos,
                value: ""
            }
        default:
            return state; 
    }
    
}; 