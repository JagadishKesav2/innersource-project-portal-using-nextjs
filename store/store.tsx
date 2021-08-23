import { createContext, useReducer } from "react"
import Reducer from './reducer'

type InitialStateType = {
    recordsCount: number;
}

const initialState = {
    recordsCount: 0
}

const Store = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState)
    
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}
 /* istanbul ignore next */
export const Context = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null
});

export default Store;