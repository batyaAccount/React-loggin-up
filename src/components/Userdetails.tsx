import { Avatar, Button } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import  { useContext, useState } from "react";
import UpdateDetails from "./UpdateDetails";
import { UserContext } from "./Manager";
const Userdetails = () => {
    const [show, setShow] = useState(false)
    const [userDetails,dispatch] = useContext(UserContext)
    return (
        <>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <p>{userDetails?.firstName} {userDetails?.LastName}</p>
                <Avatar sx={{ bgcolor: deepOrange[500], marginX: "10px" }}>{userDetails?.firstName?.charAt(0)}</Avatar>
                <Button color="primary" variant="contained" onClick={(e: any) => { e.preventDefault(); setShow(true); }}>Update</Button>
                {show && <UpdateDetails opendefault={true} text="Update" Close={() => setShow(false)}></UpdateDetails>}
            </div>
        </>)
}

export default Userdetails;
