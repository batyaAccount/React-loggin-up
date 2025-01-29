import { Provider, useDispatch, useSelector } from "react-redux";
import store, { AppDispatch } from "./reduxStore";
import { addRecipe } from "./fetchRecipes";
import AddRecipeForm from "./AddRecipeForm";
export default () => {
    const id = useSelector((state: any) => state.userId.userId);

    const dispatch = useDispatch<AppDispatch>();

    const recipeAdd = (r: FormData) => {
        if(id===-1)
            alert("You must be logged in to add a recipe");
        else
            dispatch(addRecipe({ recipe: r, userId: id }));
       
    }
    return (
        <>
            <Provider store={store}>
                <AddRecipeForm addToList={recipeAdd}></AddRecipeForm>
            </Provider>
        </>
    )
}