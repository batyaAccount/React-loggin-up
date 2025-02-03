import { Box, ButtonGroup } from "@mui/material";
import { ReactElement, useContext } from "react";
import { buttonContext } from "./RecipesStore";
export default function GroupOrientation() {
    const buttons = useContext<ReactElement[]>(buttonContext);
    return (
        <Box
            sx={{
                display: 'flex',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup
                orientation="vertical"
                aria-label="Vertical button group"
                variant="text"
            >
                {buttons}
            </ButtonGroup>
        </Box>
    );
}