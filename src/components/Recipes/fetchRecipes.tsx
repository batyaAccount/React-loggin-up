import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipe } from "../../Recipe";

export const fetchRecipes = createAsyncThunk('recipes/fetch', async (_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:3000/api/recipes');
        return response.data as Recipe[];
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }

});
export const addRecipe = createAsyncThunk('recipes/post', async ({ recipe, userId }: { recipe: FormData; userId: number | null }, thunkAPI) => {
    try {

        const headers = { "user-id":userId?.toString()}
        const res = await axios.post('http://localhost:3000/api/recipes',
            recipe, { headers }
        )
        return res.data.recipe;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})
export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [] as Recipe[],
        loading: false,
        error: ""
    },
    reducers: {
        add: (state, action: PayloadAction<Recipe>) => {
            { }
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
                state.loading = false;
                const existingRecipeIds = new Set(state.recipes.map(recipe => recipe.id));
                const uniqueRecipes = action.payload.filter(recipe => !existingRecipeIds.has(recipe.id));
                state.recipes = [...state.recipes, ...uniqueRecipes];

            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch";

            })
            .addCase(addRecipe.pending, (state) => {
                state.loading = true;
                state.error = ""
            })
            .addCase(addRecipe.fulfilled, (state, action: PayloadAction<Recipe>) => {
                state.loading = false;
                state.recipes.push(action.payload);
            })
            .addCase(addRecipe.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error.message || "Failed to add";

            })
            }
});

