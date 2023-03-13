import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";

import cartReducer from './cartSlice';

// export default configureStore({
//     reducer: {
//         cart: cartReducer,
//     },
// })
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        cart: persistedReducer},
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)