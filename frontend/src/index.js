import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import HomePageComponent from './pages/HomePage.Component';
import LoginPageComponent from './pages/LoginPage.Component';
import {configureStore} from "@reduxjs/toolkit";
import userSlicer from "./redux/user.slicer";
import {Provider} from "react-redux";
import ShopPageComponent from "./pages/ShopPage.Component";

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <HomePageComponent />,
			},
			{
				path: '/login',
				element: <LoginPageComponent />,
			},
			{
				path: '/shop',
				element: <ShopPageComponent />
			},
			{
				path: '/shop/:searchParams',
				element: <ShopPageComponent />
			}
		],
	},
]);
const store = configureStore({
	reducer: {
		userStore: userSlicer
	}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
