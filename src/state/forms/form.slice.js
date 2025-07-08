import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partnersForm: {},
};

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {},
});

export default formSlice.reducer;
