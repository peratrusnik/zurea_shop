import { Outlet } from 'react-router-dom';
import NavComponent from './components/nav/Nav.Component';
import TopHeaderInfoComponent from './components/topHeaderInfo/TopHeaderInfo.Component';
import axios from 'axios'
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {saveUser} from "./redux/user.slicer";

axios.defaults.baseURL = 'http://localhost:5050/api'
function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		// console.log(localStorage.getItem('zu_user'));
		let userLocalStorageStr = localStorage.getItem('zu_user')

		if (userLocalStorageStr) {
			dispatch(saveUser(JSON.parse(userLocalStorageStr)))
		}
	}, [])
	return (
		<div>
			<TopHeaderInfoComponent />
			<div className='container'>
				<NavComponent />
				<Outlet />
			</div>
		</div>
	);
}

export default App;
