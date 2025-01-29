import { Link, NavLink } from "react-router";


const NavBar = () => {
    return (
        <>
            <nav>
                <div style={{
                    display: "flex", position: "absolute", alignItems: "center",
                    top: "5%",
                    right: "5%"
                }}>
               
                    <Link to="./Recipes"> Recipes </Link>
                    <Link to="./AddRecipeLayout" style={{margin:"5px"}}> Add recipe </Link>
                    <NavLink to='/rer' />

                </div >
            </nav>
        </>
    )
}
export default NavBar;