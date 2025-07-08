import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./forms/form.slice";

const store = configureStore({
  reducer: {
    form: formSlice,
  },
});

export default store;
