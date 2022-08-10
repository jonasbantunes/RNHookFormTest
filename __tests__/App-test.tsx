import React from 'react';
import App from '../src/App';

import {fireEvent, render} from '@testing-library/react-native';

it('shows error on invalid credentials', async () => {
  const {findByText, getByLabelText, getByText} = render(<App />);

  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  const submitButton = getByText('Submit');

  fireEvent.changeText(emailInput, 'some@mail.com');
  fireEvent.changeText(passwordInput, 'password');
  fireEvent.press(submitButton);

  const resultText = await findByText('Invalid');

  expect(resultText).toBeDefined();
});

it('shows success on valid credentials', async () => {
  const {findByText, getByLabelText, getByText} = render(<App />);

  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  const submitButton = getByText('Submit');

  fireEvent.changeText(emailInput, 'user@mail.com');
  fireEvent.changeText(passwordInput, '123456');
  fireEvent.press(submitButton);

  const resultText = await findByText('Success');

  expect(resultText).toBeDefined();
});
