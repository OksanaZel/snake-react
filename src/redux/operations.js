import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apiService from "../service/ApiService";

export const fetchAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users = await apiService.getAllUsers();
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (user, { rejectWithValue }) => {
    try {
      const data = await apiService.createUser(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// export const fetchOneUser = createAsyncThunk(
//   "users/getOneUser",
//   async (id, { rejectWithValue }) => {
//     try {
//       const data = await apiService.getOneUser(id);
//       console.log(data);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

export const updateUserScore = createAsyncThunk(
  "users/updateUserScore",
  async ({ id, score }, { rejectWithValue }) => {
    try {
      const data = await apiService.updateUserScore({ id, score });
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// export const deleteUser = createAsyncThunk(
//   "users/deleteUser",
//   async (id, { rejectWithValue }) => {
//     try {
//       await apiService.deleteUser(id);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );
