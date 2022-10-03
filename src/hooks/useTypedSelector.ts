import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "src/state/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
