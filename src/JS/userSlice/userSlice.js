import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

// Async Thunks
export const getuser = createAsyncThunk("user/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/user/");
    return result;
  } catch (error) {
    console.log(error)
  }
});

export const deleteuser = createAsyncThunk("user/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/user/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
});

export const updateuser = createAsyncThunk("user/update", async ({ id, edited }) => {
  try {
    let result = axios.put(`http://localhost:5000/user/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error)
  }
});

export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/register", user);
    return await result;
  } catch (error) {
    console.log(error)
  }
});

export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/login", user);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      }
    });
    return result;
  } catch (error) {
    console.log(error);
  }
});

// Initial State
const initialState = {
  user: null,
  status: null,
  users: null,
};

// Redux Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Logout User
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload?.data.user;
        localStorage.setItem("token", action.payload?.data.token);
      })
      .addCase(userRegister.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(userLogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload?.data.user;
        localStorage.setItem("token", action.payload?.data.token);
      })
      .addCase(userLogin.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(userCurrent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.status = "fulfilled";
        console.log(action.payload);
        state.user = action.payload?.data.user;
      })
      .addCase(userCurrent.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(getuser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getuser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.users = action.payload.data.user;
      })
      .addCase(getuser.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(deleteuser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteuser.fulfilled, (state, action) => {
        state.status = "fulfilled";
      })
      .addCase(deleteuser.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(updateuser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateuser.fulfilled, (state) => {
        state.status = "fulfilled";
      })
      .addCase(updateuser.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

// Export Action Creators
export const { logout } = userSlice.actions;

export default userSlice.reducer;
