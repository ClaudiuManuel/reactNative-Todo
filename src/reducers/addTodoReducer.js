import {ADD_TODO} from '../constants/addTodoConst';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DELETE_TODO } from '../constants/removeTodoConst';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todos'],
};

const initialState = {
  todos: [
    {text: 'buy coffee', description: 'lorem ipsum azelano', key: '1'},
    {text: 'create an app', description: 'lorem ipsum azelano', key: '2'},
    {text: 'play on the switch', description: 'do this and do that', key: '3'},
  ],
};

const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
      case DELETE_TODO: {
        return {
          ...state,
          todos: state.todos.filter(item => action.key !== item.key)
        }
      }
    default:
      return state;
  }
};

// export default addTodoReducer;

export default persistReducer(persistConfig, addTodoReducer);
