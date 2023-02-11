import axios from "axios";
import LoginPageComponent from "./pages/LoginPage.Component";
import {Outlet, Route, Routes} from 'react-router-dom'
import HomePageComponent from "./pages/HomePage.Component";
import NavComponent from "./components/nav/Nav.Component";
import FooterComponent from "./components/footer/Footer.Component";

axios.defaults.baseURL = 'http://localhost:5050/api'

function App() {
  return (
    <>
      <NavComponent />
      <Outlet />  {/* include children from parent */}
      <FooterComponent />
    </>
  );
}

export default App;
