/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await fetch("http://localhost:3000/api/v1/user");
        const user = await response.json();
        return user.user;
    }
)
export const addToUser = createAsyncThunk(
    'user/addToUser',
    async (item) => {
        const response = await fetch("http://localhost:3000/api/v1/user", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const user = await response.json();
        return user;
    }
)
export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (id) => {
        const response = await fetch(`http://localhost:3000/api/v1/user/${id}`, { method: 'PATCH' });
        const user = await response.json();
        return user;
    }
)
export const deletefromUser = createAsyncThunk(
    'user/deletefromUser',
    async (id) => {
        const response = await fetch(`http://localhost:3000/api/v1/user/${id}`, { method: 'DELETE' });
        // const user = await response.json();
        return id;
    }
)
const initialState = {
    user: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            state.user = [...state.user, ...action.payload?.user]
            // console.log(user.user)
        },
        [fetchUser.pending]: () => {
            // state.user.push(action.payload?.user);
        },
        [fetchUser.rejected]: () => {
            // state.user.push(action.payload?.user);
        }
        , [addToUser.fulfilled]: (state, action) => {
            state.user.push(action.payload?.user);
            // console.log(user.user)
        },
        [addToUser.pending]: () => {
            // state.user.push(action.payload?.user);
        },
        [addToUser.rejected]: () => {
            // state.user.push(action.payload?.user);
        },
        [updateUser.fulfilled]: (state, action) => {
            state.user = [...state.user, ...action.payload?.user]
            // console.log(user.user)
        },
        [updateUser.pending]: () => {
            // state.user.push(action.payload?.user);
        },
        [updateUser.rejected]: () => {
            // state.user.push(action.payload?.user);
        },
        [deletefromUser.fulfilled]: (state, action) => {

            state.user = state.user.filter(userProduct => {
                return userProduct.id !== action.payload?.user
            });
        },
        [deletefromUser.pending]: () => {
            // state.user.push(action.payload?.user);
        },
        [deletefromUser.rejected]: () => {
            // state.user.push(action.payload?.user);
        }
    }
});

// export const { addPost, editPost, deletePost } = userSlice.actions;
export default userSlice.reducer;
