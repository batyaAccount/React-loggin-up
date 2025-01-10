import { Box, Button, Grid2, Modal, TextField } from "@mui/material"
import { useRef, useState } from "react";

import axios from "axios";

export default () => {
    const [open, setOpen] = useState(false);
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
    const url = 'http://localhost:3000/api/user'

    const LastNameRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const mailRef = useRef<HTMLInputElement>(null);
    const codeRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const handleClick = (e: any) => {
        e.preventDefault()
        setOpen(!open);

    }
    return (
        <>
            <Grid2 container >
                <Grid2 size={2} >
                    {(!open) ? <Button style={{}} color="primary" variant="contained" onClick={handleClick}>Register</Button> : ''}
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

                    <Button onClick={async () => {
                        setOpen(false);
                        try {
                            const logUser = {
                                email: mailRef.current?.value,
                                password: codeRef.current?.value,
                            }
                            await axios.post(url + '/register', logUser);

                        } catch (e: any) {
                            if (e.response?.status === 422) {
                                alert('User already exists')
                            }
                        }
                    }}>Register</Button>
                </Box>
            </Modal>
        </>
    )
}