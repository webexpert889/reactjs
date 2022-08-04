import {SET_MESSAGE, CLEAR_MESSAGE} from '../actions/types'
const initialState = {forwardState: true, backwardState: true}
export default function (state = initialState, action: {type: any; payload: any}) {
  const {type, payload} = action
  switch (type) {
    case SET_MESSAGE:
      return {message: payload}
    case CLEAR_MESSAGE:
      return {message: ''}
    case 'SETFORWARD':
      return {
        ...state,
        forwardState: action.payload,
      }
    case 'SETBACKWARD':
      return {
        ...state,
        backwardState: action.payload,
      }
    default:
      return state
  }
}
