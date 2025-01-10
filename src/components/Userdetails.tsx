import { Avatar, Button } from "@mui/material";
import { partUser, userContext } from './Login';
import { deepOrange } from '@mui/material/colors';
import { useContext, useState } from "react";
import UpdateDetails from "./UpdateDetails";

const Userdetails = () => {
    const [show, setShow] = useState(false)
    const userDetails = useContext<partUser>(userContext)

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
