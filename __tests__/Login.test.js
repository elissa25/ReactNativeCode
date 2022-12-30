import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import store from '../store/index';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import config from '../config';
global.fetch = jest.fn((username, password) =>
  fetch(config.API_URL_POST, {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    
    if (username === 'candidate' && password === 'P@ssw0rd') {
      Promise.resolve({
        json: () =>
          Promise.resolve({token: 'SHJADHYHCSFBHBbcjhivfvfdhdhh'}),
      });
    } else {
      Promise.resolve({
        json: () =>
          Promise.resolve({message: 'Please enter your valid username or password'}),
      });
    }
  }),
);
describe('loginTest', () => {
  it('Input Text', () => {
    const loginTest = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>,
    );
    const username = loginTest.getByTestId('username');
    const password = loginTest.getByTestId('password');
    const loginbtn = loginTest.getByText('login');
    expect(username).toBeTruthy();
    expect(password).toBeTruthy();
    expect(loginbtn).toBeTruthy();
  });
  test('loginSuccess', async () => {
    const loginSuccess = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
    const username = loginSuccess.getByTestId('username');
    const password = loginSuccess.getByTestId('password');
    const loginbtn = loginSuccess.getByText('login');
    await act(async () => {
      await fireEvent.changeText(username, 'candidate');
      await fireEvent.changeText(password, 'P@ssw0rd');
    });
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({username, password}),
      }),
    );
    await act(async () => {
      await fireEvent.press(loginbtn);
    });

    waitFor(() => {
      expect(store.getState().login.token).not.toBe('');
    });
  });

  test('disable button', async () => {
    const disablebtn = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>,
    );
    const username = disablebtn.getByTestId('username');
    const password = disablebtn.getByTestId('password');
    const loginbtn = disablebtn.getByTestId("loginId");
    await fireEvent.changeText(username, '');
    await fireEvent.changeText(password, '');
    await fireEvent.press(loginbtn);
    //console.log(loginbtn.props,'aaaaaaaaaaaaaaaaaa');
    expect(loginbtn.props.accessibilityState).toStrictEqual({disabled: true});
  });

  test('disable button (loading)', async () => {
    const disableloading = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>,
    );
    const username = disableloading.getByTestId('username');
    const password = disableloading.getByTestId('password');
    const loginbtn = disableloading.getByTestId('loginId');
        //const loginbt = disableloading.getByText('login');
      fireEvent.changeText(username, 'jolieee');
      fireEvent.changeText(password, 'ffffguikhigf');
      //fireEvent.press(loginbtn);
      await act(async () => {
        await fireEvent.press(loginbtn);
        console.log(store.getState().login.loading,"MY LOADING")
      });
   console.log(loginbtn.props,'aaaaaaaaaaaaaaaaaa');
   waitFor(() => {
    expect(loginbtn.props.accessibilityState).toStrictEqual({
      disabled: true
    });
  });
    });
  });



