
import { createSlice } from "@reduxjs/toolkit";

const userSlicer = createSlice({
    name: 'user',
    // exported reducer
    initialState: {
        user: null
    },
    // define all actions
    reducers: {
        saveUser(state, data) { //data = action
            state.user = 'test'
        }
    }
})

export const { saveUser } = userSlicer.actions
export default userSlicer.reducer