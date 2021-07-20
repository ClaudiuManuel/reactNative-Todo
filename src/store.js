import {createStore} from 'redux';
import addTodoReducer from './reducers/addTodoReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(addTodoReducer);

export default store;
