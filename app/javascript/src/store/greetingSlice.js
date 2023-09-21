import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchGreeting = createAsyncThunk('greeting', async () => {
  const response = await axios.get("/api/v1/random_greeting");
  const greeting = response.data.greeting;
  return greeting;
});

const greetingSlice = createSlice({
  name: "greeting",
  initialState: {
    greeting: ""
  },

  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.loading = false;
      state.greeting = action.payload;
    })
  },
});

export { fetchGreeting };
export default greetingSlice.reducer;
