import { createBrowserRouter } from "react-router";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";
import HomePage from "./components/HomePage";
import Aboute from "./components/Aboute";


export const router = createBrowserRouter(
    [
        {
            path: "/", element:
                <>
                    <NavBar></NavBar>
                    <Outlet></Outlet>
                </>,
            children: [
                { path: "/HomePage", element: <HomePage /> },
                { path: "/Aboute", element: <Aboute /> },
            ]
        },

    ]
)