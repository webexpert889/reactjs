import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from './types'
import AuthService from '../services/auth.service'
// export const register = (name:string, phone_number:string, password:string) => (dispatch: (arg0: { type: any; payload?: any; }) => void) => {
//   return AuthService.register(name, phone_number, password).then(
//     (response) => {
//       dispatch({
//         type: REGISTER_SUCCESS,
//       });
//       dispatch({
//         type: SET_MESSAGE,
//         payload: response.data.message,
//       });
//       return Promise.resolve();
//     },
//     (error) => {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       dispatch({
//         type: REGISTER_FAIL,
//       });
//       dispatch({
//         type: SET_MESSAGE,
//         payload: message,
//       });
//       return Promise.reject();
//     }
//   );
// };
// export const login =
//   (phone: any, password: any) => (dispatch: (arg0: {type: string; payload?: any}) => void) => {
//     return AuthService.login(phone, password).then(
//       (data) => {
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: {user: data},
//         })
//         return Promise.resolve()
//       },
//       (error) => {
//         const message =
//           (error.response && error.response.data && error.response.data.message) ||
//           error.message ||
//           error.toString()
//         dispatch({
//           type: LOGIN_FAIL,
//         })
//         dispatch({
//           type: SET_MESSAGE,
//           payload: message,
//         })
//         return Promise.reject()
//       }
//     )
//   }

export const loginsuccessfull = (data: JSON) => {}
export const logout = () => (dispatch: (arg0: {type: string}) => void) => {
  AuthService.logout()
  dispatch({
    type: LOGOUT,
  })
}
