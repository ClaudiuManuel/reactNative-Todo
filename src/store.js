import { createStore } from 'redux'
import addTodoReducer from './reducers/addTodoReducer'

const store = createStore(addTodoReducer)

export default store;