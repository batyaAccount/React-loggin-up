import { Outlet, RouterProvider } from "react-router"
import { router } from "../router"
import { Provider } from "react-redux"
import store from "./Recipes/reduxStore"
import {   createContext, useReducer } from "react"
import { partUser, User } from "./Login/Login"
type action = {
    type: string,
    data: partUser
}
type UserContextType = [partUser,React.Dispatch<action>];

export const UserContext = createContext<UserContextType>([{}, () => {}]);
export default () => {

    const userReducer = (state: partUser, action: action):partUser => {
        switch (action.type) {
            case 'SET_USER': { }
                return { ...action.data }
            default:
                return state
        }
    }
    const [user, userDispatch] = useReducer(userReducer, {} as User);

    return (<>
        <UserContext value={[user, userDispatch]}>
            <Provider store={store} >
                <RouterProvider router={router}></RouterProvider>
            </Provider>
        </UserContext>
    </>)
}

