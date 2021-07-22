import {DELETE_TODO} from '../constants/removeTodoConst';

export const deleteToDo = key => {
  return {
    type: DELETE_TODO,
    key: key,
  };
};
