import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../components/Home.jsx";
import Root from "../layouts/Root.jsx";
import MyProfile from "../components/MyProfile.jsx";
import CarDetails from "../components/CarDetails.jsx";
import PrivateRoute from "../provider/PrivateRoute.jsx";
import AddCar from "../components/AddCar.jsx";
import BrowseCars from "../components/BrowseCars.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/browseCars',
                loader: () => fetch('http://localhost:3000/cars'),
                element: <BrowseCars></BrowseCars>
            },
            {
                path: '/carDetails/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/cars/${params.id}`),
                element: <PrivateRoute>
                    <CarDetails></CarDetails>
                </PrivateRoute>
            },
            {
                path: '/addCar',
                element: <PrivateRoute>
                    <AddCar></AddCar>
                </PrivateRoute>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },

            {
                path: '/auth/myProfile',
                element: <MyProfile></MyProfile>
            },
        ],

    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
]);


export default router;