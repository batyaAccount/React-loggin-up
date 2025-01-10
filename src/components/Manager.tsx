import Login from "./Login"
import Register from "./Register"
export default () => {
    return (<>

        <div style={{
            display: "flex", position: "absolute",alignItems: "center",
            top: "5%",
            left: "5%"
        }}>
            
            <Login></Login>
            <Register></Register>
        </div>



    </>)
}
