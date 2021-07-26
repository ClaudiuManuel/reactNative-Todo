import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './reducers/todoSlice';

export const storeToolkit = configureStore({
  reducer: {
    todoReducer: todoSlice,
  },
});

export type RootState = ReturnType<typeof storeToolkit.getState>;
