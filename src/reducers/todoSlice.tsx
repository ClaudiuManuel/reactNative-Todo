import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {text: 'buy coffee', description: 'lorem ipsum azelano', key: '1'},
    {text: 'create an app', description: 'lorem ipsum azelano', key: '2'},
    {text: 'play on the switch', description: 'do this and do that', key: '3'},
  ],
};

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    deleteToDo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter(item => {
          console.log(action.payload);
          return action.payload !== item.key;
        }),
      };
    },
    addToDo: (state, action) => {
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {deleteToDo, addToDo} = todoSlice.actions;

export default todoSlice.reducer;
