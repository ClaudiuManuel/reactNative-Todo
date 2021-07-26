import {applyMiddleware, createStore} from 'redux';
import addTodoReducer from './reducers/addTodoReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';
// import logger from 'redux-logger';

const store = createStore(addTodoReducer);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export  {store, persistor};
