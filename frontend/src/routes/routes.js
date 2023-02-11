import App from "../App";
import ErrorPageComponet from "../pages/ErrorPage.Componet";
import HomePageComponent from "../pages/HomePage.Component";
import LoginPageComponent from "../pages/LoginPage.Component";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPageComponet/>,
        children: [ 
            {
                path: "/home",
                element: <HomePageComponent/>,
            },  
            {
                path: "/login",
                element: <LoginPageComponent/>,
            },  
        ]
    }
]

export default routes;