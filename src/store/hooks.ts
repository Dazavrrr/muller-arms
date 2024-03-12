import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type {AppDispatch, RootState} from "@/common/types";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;