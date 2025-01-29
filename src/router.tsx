import { createBrowserRouter } from "react-router";
import HomePage from "./components/HomePage";
import Recipes from "./components/Recipes";
import Layout from "./components/Layout";
import { Outlet } from "react-router";
import AddRecipeLayout from "./components/AddRecipeLayout";
import { Provider } from "react-redux";
import store from "./components/reduxStore";


export const router = createBrowserRouter(
    [
        {
            path: "/", element:
                <Layout />,
            children: [
                { path: "/HomePage", element: <><HomePage /><Outlet /> </> },
                { path: "/Recipes", element: <><Recipes /><Outlet /> </> },
                {
                    path: '/AddRecipeLayout', element: 
                        <AddRecipeLayout />
                },
            ]
        },

    ]
)