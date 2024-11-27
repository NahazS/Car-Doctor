import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import ServiceFullDetails from "../Pages/ServiceFullDetails/ServiceFullDetails";
import CheckOut from "../Pages/CheckOut.jsx/CheckOut";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import OrderList from "../Pages/MyOrderList/OrderList";
import Error from "../Pages/Error/Error";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/services'),
                errorElement: <Error></Error>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:3000/services'),
                element: <Services></Services>,
                errorElement: <Error></Error>
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`),
                element: <ServiceFullDetails></ServiceFullDetails>,
                errorElement: <Error></Error>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/logIn',
                element: <Login></Login>,
                errorElement: <Error></Error>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
                errorElement: <Error></Error>
            },
            {
                path: '/checkOut/:id',
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                errorElement: <Error></Error>
            },
            {
                path: '/orderList',
                element: <PrivateRoute><OrderList></OrderList></PrivateRoute>,
                errorElement: <Error></Error>
            }
        ]
    }
])

export default Router;