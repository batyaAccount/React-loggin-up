import { createSlice } from '@reduxjs/toolkit';


const userIdSlice = createSlice({
    name: 'userId',
    initialState: { userId: -1 as number },
    reducers: {
        setStateUserId: (state, action) => {
            state.userId = action.payload
        }

    }
});
export const { setStateUserId } = userIdSlice.actions;
export default userIdSlice;