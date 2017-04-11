import { SET_HEADER_TEXT } from './actions'

export function setHeaderText (headerText) {
  return { type: SET_HEADER_TEXT, headerText }
}
