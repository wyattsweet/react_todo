import { SET_HEADER_TEXT, SET_TODO, ADD_TODO } from './actions'

export function setHeaderText (headerText) {
  return { type: SET_HEADER_TEXT, headerText }
}

export function setTodo (todo) {
  return {type: SET_TODO, todo}
}

export function addTodo (todo) {
  return {type: ADD_TODO, todo}
}
