import { Box, Button, Grid2, Modal, TextField } from "@mui/material"
import {  createContext, useContext,  useRef, useState } from "react"
import Userdetails from "./Userdetails";
import axios from "axios";
import { UserContext } from "./Manager";

export type User = {
    id:number,
    firstName: string | undefined,
    LastName: string,
    Mail: string,
    Code: string,
    Address: string,
    Phone: number,
}
export type partUser = Partial<User>
export const funcContext = createContext<Function>(() => { })
export const userIdContext = createContext<number>(0);

const url = 'http://localhost:3000/api/user'
const Login = () => {
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

    const [state, setState] = useState("");
    const [isLogin, setIsLogin] = useState(false)
    const [open, setOpen] = useState(false)
    const [user, userDispatch] = useContext(UserContext);
    const LastNameRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const mailRef = useRef<HTMLInputElement>(null);
    const codeRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    return (
        <>

            <Grid2 container spacing={2}>
                <Grid2 size={2}>
                    <div style={{ display: "flex", alignItems: "center" }} >
                        {(!isLogin) ?
                            <>
                                <div style={{ display: 'flex' }}>
                                    <Button color="primary" variant="contained" onClick={() => { setState("login"); setOpen(!open) }}>Login</Button>
                                    <Button color="primary" variant="contained" onClick={() => { setState("register"); setOpen(!open) }}>Register</Button>
                                </div></> :
                            <Userdetails></Userdetails>}</div>
                </Grid2>
            </Grid2>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style} >
                    <TextField label='firstName' inputRef={firstNameRef} />
                    <TextField label='LastName' inputRef={LastNameRef} />
                    <TextField label='Mail' inputRef={mailRef} />
                    <TextField label='Code' inputRef={codeRef} />
                    <TextField label='Address' inputRef={addressRef} />
                    <TextField label='Phone' inputRef={phoneRef} />
                    <Button onClick={async (e) => {
                        try {
                            e.preventDefault();
                            setOpen(false);
                            const user = {
                                id:undefined,
                                firstName: firstNameRef.current?.value,
                                LastName: LastNameRef.current?.value,
                                Mail: mailRef.current?.value,
                                Code: codeRef.current?.value,
                                Address: addressRef.current?.value,
                                Phone: Number(phoneRef.current?.value)
                            }
                            const logUser = {
                                email: mailRef.current?.value,
                                password: codeRef.current?.value
                            }
                            const res = await axios.post(url + '/' + state, logUser)
                            user.id = res.data.user.id;
                            userDispatch({ type: 'SET_USER', data: { ...user } });
                            if (state === 'login')
                                setIsLogin(true);
                        }
                        catch (e: any) {
                            setIsLogin(false);
                            if (e.response?.status === 401) {
                                alert('Invalid credentials')
                            }
                            if (e.response?.status === 400) {
                                alert('User already exists')
                            }
                        }
                    }}>{state}</Button>
                </Box>
            </Modal>

        </>
    )
}
export default Login
