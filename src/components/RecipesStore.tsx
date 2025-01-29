import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./reduxStore";
import { createContext, useEffect, useState } from "react";
import { fetchRecipes, addRecipe } from "./fetchRecipes";
import { Recipe } from "../Recipe";
import { Button, Grid2 } from "@mui/material";
import GroupOrientation from "./GroupOrientation";
import ShowRecipe from "./ShowRecipe";

export const buttonContext = createContext<JSX.Element[]>([]);
export default () => {
    const [numberRecipe, setNumberRecipe] = useState<Recipe | undefined>(undefined);
    const dispatch = useDispatch<AppDispatch>();
    const recipes = useSelector((state: RootState) => state.recipes.recipes);
    const buttons: JSX.Element[] = recipes.map((r: Recipe) => (
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
            <Grid2 container spacing={2}>
                <Grid2 size={6}>
                    {numberRecipe && <ShowRecipe recipe={numberRecipe} />}
                </Grid2>
                <Grid2 size={6} container
                    justifyContent="center"
                    alignItems="center">
                    <GroupOrientation/>
                </Grid2>

            </Grid2>
        </buttonContext.Provider>
    </>)
}
