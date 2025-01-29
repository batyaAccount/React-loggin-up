import { Navigate, Outlet } from "react-router"
import NavBar from "./NavBar"

export default () => {
    return (
        <>
            <NavBar></NavBar>
            <Navigate to="HomePage" replace />
            <Outlet></Outlet>
        </>
    )
}