import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom';
import HomePageComponent from './pages/HomePage.Component';
import LoginPageComponent from './pages/LoginPage.Component';
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes/routes';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePageComponent />,
//   },
//   {
//     path: "/login",
//     element: <LoginPageComponent/>
//   },
// ]);

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
