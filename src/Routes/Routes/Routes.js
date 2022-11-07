import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Banner from "../../Pages/Home/Banner";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path:'/banner',
                element: <Banner></Banner>
            }
        ]
    }
])