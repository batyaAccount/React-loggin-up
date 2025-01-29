import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { recipesSlice } from "./fetchRecipes";
import userIdSlice from "./userIdSlice";

const store = configureStore({
    reducer: combineSlices(
        recipesSlice, userIdSlice
    )
}
);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default store;