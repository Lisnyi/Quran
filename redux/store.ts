import { configureStore } from "@reduxjs/toolkit";
import { surasApi } from "./suras"

export const store = configureStore({
    reducer: {
        [surasApi.reducerPath]: surasApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
              extraArgument: surasApi.middleware,
            },
            serializableCheck: false,
          }).concat(surasApi.middleware)
})