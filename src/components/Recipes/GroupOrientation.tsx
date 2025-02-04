import { Box, ButtonGroup } from "@mui/material";
import { ReactElement, useContext } from "react";
import { ButtonContext } from "./RecipesStore";
export default function GroupOrientation() {
    const buttons = useContext<ReactElement[]>(ButtonContext);
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