import {
    createBrowserRouter, Navigate,
} from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import ChefDetail from "../pages/ChefDetail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch("http://localhost:3000/chefs")
            },
            {
                path: '/chefs',
                element: <Navigate to='/'></Navigate>
            },

            {
                path: '/chefs/:id',
                element: <ChefDetail></ChefDetail>,
                loader: ({params}) => fetch(`http://localhost:3000/chefs/${params.id}`)
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