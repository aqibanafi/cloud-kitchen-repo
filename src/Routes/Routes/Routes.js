import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Banner from "../../Pages/Home/Banner";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import ServiceDetailPage from "../../Pages/ServiceDetailPage/ServiceDetailPage";
import Services from "../../Pages/Services/Services";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/homeservices')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path:'/banner',
                element: <Banner></Banner>
            },
            {
                path: '/servicedetail/:id',
                element: <ServiceDetailPage></ServiceDetailPage>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
])