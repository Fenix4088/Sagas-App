import {useSelector} from "react-redux";
import {AppRootState} from "../redux";

export const useAppSelector = <RT = unknown, S = AppRootState>(selector: (state: S) => RT) => useSelector(selector);