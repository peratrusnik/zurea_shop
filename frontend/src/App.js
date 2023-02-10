import axios from "axios";
import LoginPageComponent from "./pages/LoginPage.Component";
import {Route, Routes} from 'react-router-dom'
import HomePageComponent from "./pages/HomePage.Component";

axios.defaults.baseURL = 'http://localhost:5050/api'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/login" element={<LoginPageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
