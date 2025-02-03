import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./reduxStore";
import { createContext, ReactElement, useEffect, useState } from "react";
import { fetchRecipes } from "./fetchRecipes";
import { Recipe } from "../../Recipe";
import { Button, Grid2 } from "@mui/material";
import GroupOrientation from "./GroupOrientation";
import { Navigate, Outlet } from "react-router";

export const buttonContext = createContext<ReactElement[]>([]);
export default () => {
    const [numberRecipe, setNumberRecipe] = useState<Recipe | undefined>(undefined);
    const dispatch = useDispatch<AppDispatch>();
    const recipes = useSelector((state: RootState) => state.recipes.recipes);
    const buttons: ReactElement[] = recipes.map((r: Recipe) => (
        <Button onClick={() => handleClick(r)} key={r.id}>{r.title}</Button>
    ));
    const handleClick = (recipe: Recipe) => {
        setNumberRecipe(recipe);
    }
    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);


    return (<>
        <buttonContext.Provider value={buttons}>
            {numberRecipe && <Navigate to={`./ShowRecipe/${numberRecipe.id}`} />}
            <Grid2 container spacing={2} justifyContent="center" alignItems="center" display={"flex"} style={{ height: "100vh" }}>
                <Grid2 size={6} style={{ height: "500px"}}>
                    <Outlet />
                </Grid2>
                <Grid2 size={6} style={{ height: "500px"}}>
                    <GroupOrientation />
                </Grid2>
            </Grid2>

        </buttonContext.Provider>
    </>)
}
