import {SET_MESSAGE, CLEAR_MESSAGE, SETFORWARD, SETBACKWARD} from './types'
export const setMessage = (message: string) => ({
  type: SET_MESSAGE,
  payload: message,
})
export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
})
export const setForward = (forward: boolean) => ({
  type: SETFORWARD,
  payload: forward,
})
export const setbackward = (backward: boolean) => ({
  type: SETBACKWARD,
  payload: backward,
})
