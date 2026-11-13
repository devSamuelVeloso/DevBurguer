import { createBrowserRouter } from "react-router-dom";
import Login from '../pages/login/index'
import Register from '../pages/register/index'
import Home from '../pages/home/index'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },

])