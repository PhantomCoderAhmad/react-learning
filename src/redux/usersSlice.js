// usersSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const getUsers = createAsyncThunk("usersListing", async () => {
    
    try {
        const response = await axios.get("http://localhost:3011/users");
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const addUser = createAsyncThunk("users/addUser", async ({name,email}) => {
    try {
        const response = await axios.post("http://localhost:3011/users", { name, email });
        return response.data;
    } catch (error) {
    throw error;
    }
});
export const getUserDetail = createAsyncThunk("users/editUser", async (id) => {
    try {
        const response = await axios.get(`http://localhost:3011/users/${id}`);
        return response.data;
    } catch (error) {
    throw error;
    }
});
export const updateUser = createAsyncThunk("users/updateUser", async (userData, { getState }) => {
    try {
        let UserId = getState().users.editUserId;
        const response = await axios.put(`http://localhost:3011/users/${UserId}`, {name: userData.name, email: userData.email});
        return response.data;
    } catch (error) {
    throw error;
    }
});
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3011/users/${id}`);
        return response.data;
    } catch (error) {
    throw error;
    }
});
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [], 
        userDetail: [],
        editUserId: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        setEditUserId(state, action) {
            state.editUserId = action.payload;
            console.log("editUserId is: ", state.editUserId);
        },
        clearEditUserId(state) {
            state.editUserId = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users.push(action.payload);
            })
            .addCase(addUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getUserDetail.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserDetail.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userDetail = action.payload
            })
            .addCase(getUserDetail.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = state.users.filter(user => user.id !== action.payload.id);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

    },
});
export const { setEditUserId, clearEditUserId } = usersSlice.actions;
export default usersSlice.reducer;