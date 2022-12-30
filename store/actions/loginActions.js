import { loginActions } from "../slices/login-slice";
import config from '../../config';

export const loginUser = user => {
  return async dispatch => {
    try {
      dispatch(loginActions.loginRequest());
      const response = await fetch(config.LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }
      dispatch(loginActions.successLogin(data));
    } catch (error) {
      dispatch(loginActions.failedLogin(error.message));
    }
  };
};
