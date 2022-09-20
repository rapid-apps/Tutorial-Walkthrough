import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import configStore from "./configStore";
import reportWebVitals from './reportWebVitals';

import {configure as signupFormConfigure} from './features/SignupForm/slice';
import {configure as validatorConfigure} from './features/Validator/slice';

import SignupContainerClient from './containers/signup/client';

const history = createBrowserHistory();
const initialState: any = {};

const store = configStore(history, initialState);
export type RootState = ReturnType<typeof store.getState>;


signupFormConfigure(store);
validatorConfigure(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/client/signin" element={<SignupContainerClient />} />
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
