import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddNewService from "../../Pages/AddNewService/AddNewService";
import Blog from "../../Pages/Blog/Blog";
import Blog01 from "../../Pages/Blog/Blog01";
import Blog02 from "../../Pages/Blog/Blog02";
import Blog03 from "../../Pages/Blog/Blog03";
import Blog04 from "../../Pages/Blog/Blog04";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Banner from "../../Pages/Home/Banner";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Registration from "../../Pages/Registration/Registration";
import ServiceDetailPage from "../../Pages/ServiceDetailPage/ServiceDetailPage";
import Services from "../../Pages/Services/Services";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import UserReview from "../../Pages/UserReview/UserReview";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-11-superkitch-server-side.vercel.app/homeservices')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://assignment-11-superkitch-server-side.vercel.app/services')
            },
            {
                path: '/banner',
                element: <Banner></Banner>
            },
            {
                path: '/servicedetail/:id',
                element: <ServiceDetailPage></ServiceDetailPage>,
                loader: ({ params }) => fetch(`https://assignment-11-superkitch-server-side.vercel.app/service/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/updatereview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://assignment-11-superkitch-server-side.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddNewService></AddNewService></PrivateRoutes>
            },
            {
                path: '/userreview',
                element: <UserReview></UserReview>,
                loader: () => fetch('https://assignment-11-superkitch-server-side.vercel.app/allreviews')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/blog01',
                element: <Blog01></Blog01>
            },
            {
                path: '/blog02',
                element: <Blog02></Blog02>
            },
            {
                path: '/blog03',
                element: <Blog03></Blog03>
            },
            {
                path: '/blog04',
                element: <Blog04></Blog04>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])