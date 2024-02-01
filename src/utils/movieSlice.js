import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
