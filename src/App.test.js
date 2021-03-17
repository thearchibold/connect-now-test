import { render, screen } from '@testing-library/react';
import App from './App';
import {ToastProvider} from "react-toast-notifications";
import React from "react";

test('Page renders', () => {

  const page = <ToastProvider
      autoDismiss
      autoDismissTimeout={6000}
      placement="top-center"
  ><App /></ToastProvider>;

  render(page);
  expect(true).toBe(true);
});
