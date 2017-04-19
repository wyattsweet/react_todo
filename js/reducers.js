import { SET_TODO, ADD_TODO } from './actions'
import preload from '../public/data.json'

const DEFAULT_STATE = {
  header: 'Todos',
  todo: '',
  todos: preload.todos
}

const setTodo = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {todo: action.todo})
  return newState
}

const addTodo = (state, action) => {
  const newTodo = {}
  Object.assign(newTodo, {'id': state.todos.length + 1, 'todo': action.todo, 'completed': false})
  let newTodos = state.todos
  newTodos.push(newTodo)

  const newState = {}
  Object.assign(newState, state, {todos: newTodos})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_TODO:
      return setTodo(state, action)
    case ADD_TODO:
      return addTodo(state, action)
    default:
      return state
  }
}

export default rootReducer
