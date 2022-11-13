import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import roomReducer from "./slices/roomSlice";
import boardReducer from "./slices/boardSlice";
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = configureStore({
    reducer: {
        user: userReducer,
        room: roomReducer,
        board: boardReducer,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;