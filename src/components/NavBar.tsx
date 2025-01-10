import { Link, NavLink } from "react-router";


const NavBar = () => {
    return (
        <>
            <nav>
                <Link to="./HomePage"> Home </Link>
                <Link to="./Aboute"> Aboute </Link>
                <NavLink to='/rer' />

            </nav>

        </>
    )
}
export default NavBar;