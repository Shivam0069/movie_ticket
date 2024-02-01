import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: [],
    isOpen: false,
  },
  reducers: {
    addMovie: (state, action) => {
      state.movie = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { addMovie , setIsOpen } = movieSlice.actions;
export default movieSlice.reducer;
