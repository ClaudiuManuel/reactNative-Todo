import { ADD_TODO } from "../constants/addTodoConst";

export const addToDo = (text, description) => {
    return {
        type: ADD_TODO,
        payload: {        
            text: text,
            description: description,
            key: (Math.random()*100).toString()
        }
    }
}

