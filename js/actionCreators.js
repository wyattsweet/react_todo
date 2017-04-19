import { SET_TODO, ADD_TODO } from './actions'

export function setTodo (todo) {
  return {type: SET_TODO, todo}
}

export function addTodoAction (todo) {
  return {type: ADD_TODO, todo}
}
