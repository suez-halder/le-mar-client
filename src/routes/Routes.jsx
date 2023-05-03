import {
    createBrowserRouter, Navigate,
} from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs";
import ChefDetail from "../pages/ChefDetail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch("https://chef-recipe-hunter-server-suez-halder.vercel.app/chefs")
            },
            {
                path: '/chefs',
                element: <Navigate to='/'></Navigate>
            },

            {
                path: '/chefs/:id',
                element: <PrivateRoute><ChefDetail></ChefDetail></PrivateRoute>,
                loader: ({params}) => fetch(`https://chef-recipe-hunter-server-suez-halder.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
            
        ],
    },
]);

export default router;