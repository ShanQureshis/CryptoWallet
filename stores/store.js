import { Tuple, configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tabReducer";
import marketReducer from "./market/marketReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";


export default configureStore({
  reducer: {
    tabReducer,
   marketReducer
  },
  middleware: () => new Tuple(thunk, logger),
});