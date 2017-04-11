import { SET_HEADER_TEXT } from './actions'

const DEFAULT_STATE = {
  header: 'Todos'
}

const setHeaderText = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {headerText: action.headerText})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_HEADER_TEXT:
      return setHeaderText(state, action)
    default:
      return state
  }
}

export default rootReducer
