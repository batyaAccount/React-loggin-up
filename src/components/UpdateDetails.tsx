import { Box, Button, Modal, TextField } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { funcContext, partUser } from "./Login";
import axios from "axios";
import { UserContext } from "./Manager";
const Updatedetails = ({ text, opendefault, Close }: { text: string, opendefault: boolean, Close: Function }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(opendefault)
    const [userDetails,dispatch] = useContext(UserContext)
    const nameRef = useRef<HTMLInputElement>(null);
    const mailRef = useRef<HTMLInputElement>(null);
    const codeRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const url = 'http://localhost:3000/api/user';
    return (
        <>
            <Modal open={open} >
                <Box sx={style} >
                    <TextField label='Name' inputRef={nameRef} />
                    <TextField label='Mail' inputRef={mailRef} />
                    <TextField label='Code' inputRef={codeRef} />
                    <TextField label='Address' inputRef={addressRef} />
                    <TextField label='Phone' inputRef={phoneRef} />
                    <Button onClick={
                        async (e: any) => {                      
                            e.preventDefault();
                            setOpen(false);
                            if (nameRef.current?.value != userDetails.firstName) {
                                try {
                                    const user = {
                                        id:userDetails.id,
                                        firstName: nameRef.current?.value,
                                        lastName: nameRef.current?.value,
                                        Mail: mailRef.current?.value,
                                        Code: codeRef.current?.value,
                                        Address: addressRef.current?.value,
                                        Phone: Number(phoneRef.current?.value)
                                    }
                                    const logUser = {
                                        firstName: nameRef.current?.value,
                                        lastName: nameRef.current?.value,
                                        email: mailRef.current?.value,
                                        address: addressRef.current?.value,
                                        phone: Number(phoneRef.current?.value)
                                    }
                                    await axios.put(url, logUser, { headers: { 'user-id': user.id + '' } });
                                    dispatch({
                                        type: 'SET_USER', data: user
                                    });
                                }
                                catch (e: any) {
                                    if (e.response?.status === 404) {
                                        alert('User not found');
                                    }
                                }
                            }
                            Close();
                        }}>{text}</Button>
                </Box>
            </Modal >
        </>
    )
}
export default Updatedetails
