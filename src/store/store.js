import {configureStore} from "@reduxjs/toolkit";
import {dataSlice} from "../features/data/dataSlice";
import {idSlice} from "../features/id/idSlice";
import { detailSlice } from "../features/data/detailedSlice";

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        id: idSlice.reducer,
        detail: detailSlice.reducer,
    }
})