import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

import {
	AiOutlineUser,
	AiOutlineShoppingCart,
	AiOutlineMenu,
} from 'react-icons/ai';
import NavBarLinkComponent from "./components/NavBarLink.Component";
import {useDispatch, useSelector} from "react-redux";
import {removeUserFromLocalStorage} from "../../services/auth.service";
import {removeUser} from "../../redux/user.slicer";
import NavBarSearchComponent from './components/NavBarSearch.Component';

function NavComponent() {
	const [toggle, setToggle] = useState(false);
	const userStore = useSelector((store) => store.userStore.user)
	const dispatch = useDispatch()

	useEffect(() => {
		// console.log(userStore);
	}, [userStore])

	const onLogOut = () => {
		removeUserFromLocalStorage()
		dispatch(removeUser())
	}

	return (
		<div className='navbar'>
			{/* mobile view start here */}
			<div className='mobileMenu'>
				<AiOutlineMenu
					onClick={() => setToggle((prevState) => !prevState)}
				/>
				<ul className={`mobile-item ${toggle ? 'active' : null}`}>
					{/*<li>*/}
					{/*	<NavBarLinkComponent />*/}
					{/*</li>*/}
					{/*<li>*/}
					{/*	<NavBarLinkComponent />*/}
					{/*</li>*/}
					{/*<li>*/}
					{/*	<NavBarLinkComponent />*/}
					{/*</li>*/}
					{/*<li>*/}
					{/*	<NavBarLinkComponent />*/}
					{/*</li>*/}
				</ul>
			</div>
			{/* desktop view */}
			<img src={logo} alt='logoImg' />
			<ul className='nav-item'>
				<li>
					<NavBarLinkComponent btnTitle="Home" redirectUrl="/" />
				</li>
				<li>
					<NavBarLinkComponent btnTitle="Shop" redirectUrl="/shop" />
				</li>
				<li>
					<NavBarLinkComponent btnTitle="Watch" redirectUrl="/"/>
				</li>
				<li>
					<NavBarLinkComponent btnTitle="More" redirectUrl="/" />
				</li>
			</ul>
			{/* profile and login section */}
			<div className='user'>
				<div className='profile'>
					<NavBarSearchComponent />
					<div className='dropdown'>
						<button
							className='btn  dropdown-toggle'
							type='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							<AiOutlineUser />
						</button>
						<ul className='dropdown-menu'>
							<li>
								<Link className='dropdown-item' to='/'>
									Another action
								</Link>
							</li>
							<li>
								<Link className='dropdown-item' to='/'>
									Something else here
								</Link>
							</li>
							<li>
								{
									!userStore?.email ?
										(
											<Link className='dropdown-item' to='/login'>
												Sign In
											</Link>
										) : <button onClick={e => onLogOut()}>
										Log out
										</button>
								}

							</li>
						</ul>
					</div>
				</div>
				{/* shop/cart section */}
				<div className='cart'>
					<AiOutlineShoppingCart />
					<p>Cart - 0</p>
				</div>
			</div>
		</div>
	);
}

export default NavComponent;
