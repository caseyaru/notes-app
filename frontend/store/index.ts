import { configureStore } from "@reduxjs/toolkit";

import popupReducer from "./popupSlice";

export default configureStore({
  reducer: {
    popups: popupReducer,
  },
});

export { getPopups } from "./selectors";

export * as selectors from "./selectors";
