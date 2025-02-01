import { Provider, useDispatch } from "react-redux";
import store, { AppDispatch } from "./reduxStore";
import { addRecipe } from "./fetchRecipes";
import AddRecipeForm from "./AddRecipeForm";
import { useContext } from "react";
import { UserContext } from "./Manager";
export default () => {

    const dispatch = useDispatch<AppDispatch>();
    const [user, userDispatch] = useContext(UserContext);

    const recipeAdd = (r: FormData) => {
        if (user.id === undefined)
            alert("You must be logged in to add a recipe");
        else
            dispatch(addRecipe({ recipe: r, userId: user.id }));
    }
    return (
        <>
            <Provider store={store}>
                <AddRecipeForm addToList={recipeAdd}></AddRecipeForm>
            </Provider>
        </>
    )
}