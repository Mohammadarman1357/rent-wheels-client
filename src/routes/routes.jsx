import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../components/Home.jsx";
import Root from "../layouts/Root.jsx";
import MyProfile from "../components/MyProfile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
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