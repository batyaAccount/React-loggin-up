import { createBrowserRouter } from "react-router";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import { Outlet } from "react-router";
import AddRecipeLayout from "./components/Recipes/AddRecipeLayout";
import ShowRecipe from "./components/Recipes/ShowRecipe";
import Recipes from "./components/Recipes/Recipes";

export const router = createBrowserRouter(
    [
        {
            path: "/", element:
                <Layout />,
            children: [
                { path: "/HomePage", element: <><HomePage/><Outlet/></> },
                { path: "/Recipes", element: <><Recipes/></>,
                    children: [{path: "/Recipes/ShowRecipe/:id",element: <><ShowRecipe></ShowRecipe><Outlet></Outlet></>}]
                },
                { path: '/AddRecipeLayout', element: <><AddRecipeLayout/><Outlet/></> },
            ]
        },

    ]

)