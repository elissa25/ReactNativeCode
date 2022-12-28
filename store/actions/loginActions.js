import { loginActions } from "../slices/login-slice";

export const loginUser = user => {
  return async dispatch => {
    try {
      dispatch(loginActions.loginRequest());
      const response = await fetch('http://34.245.213.76:3000/auth/signin', {
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
