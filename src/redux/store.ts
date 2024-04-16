import { configureStore} from "@reduxjs/toolkit";
import { useSelector,TypedUseSelectorHook } from "react-redux";

export const store=configureStore({
    reducer:{
    }
})
type RootState=ReturnType<typeof store.getState>;
export const AppDispatch=typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;