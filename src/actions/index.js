import uuid from 'uuid/v4';

import { ADD_NEW_TODO, COMPLETE_TODO, REMOVE_TODO } from '../constants/action_type';

export const addNewTodo = text => {
  return {
    type: ADD_NEW_TODO,
    newItem: {
      text,
      key: uuid(),
      completed: false
    }
  }
}

export const completeTodo = (key) => {
  return {
    type: COMPLETE_TODO,
    key
  }
}

export const removeTodo = (key) => {
  return {
    type: REMOVE_TODO,
    key
  };
}