import { createBrowserRouter } from "react-router";
import HomePage from "./components/HomePage";
import Recipes from "./components/Recipes";
import Layout from "./components/Layout";
import { Outlet } from "react-router";
import AddRecipeLayout from "./components/AddRecipeLayout";
import ShowRecipe from "./components/ShowRecipe";



export const router = createBrowserRouter(
    [
        {
            path: "/", element:
                <Layout />,
            children: [
                { path: "/HomePage", element: <><HomePage /><Outlet /> </> },
                { path: "/Recipes", element: <><Recipes /> </>,
                    children: [{path: "/Recipes/ShowRecipe/:id",element: <><ShowRecipe></ShowRecipe><Outlet></Outlet></>}]
                },
                { path: '/AddRecipeLayout', element: <> <AddRecipeLayout /><Outlet /></> },
            ]
        },

    ]

)