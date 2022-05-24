import './index.css';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { store } from './redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {routes} from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {/*<Route path={ROUTES.ROOT} element={<App/>}/>*/}
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root') as HTMLElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
