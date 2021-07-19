import { ADD_TODO } from "../constants/addTodoConst";

const initialState = {
    todos:[
        { text: 'buy coffee', description: 'lorem ipsum azelano', key: '1' },
        { text: 'create an app', description: 'lorem ipsum azelano', key: '2' },
        { text: 'play on the switch', description: 'do this and do that', key: '3' }
    ]
};

const addTodoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: return {
            ...state,
            todos: state.todos.concat(action.payload)
        }

        default: return state;
    }
}

export default addTodoReducer;