import { Button, Stack } from "@mui/material";
import React from "react";

import { StyledMyButton } from ".";

interface IMyButtonProps {
    icon?: any;
    positionIcon?: string;
    text?: string;
    backgroundColor?: string;
    color?: string;
}

export const MyButton = (props: IMyButtonProps) => {
    const { icon, positionIcon, color, text, backgroundColor } = props;
    return (
        <StyledMyButton backgroundColor={backgroundColor} color={color}>
            <Stack direction="row" spacing={2}>
                {positionIcon === "start" ? (
                    <Button variant="outlined" startIcon={icon} disableElevation>
                        {text}
                    </Button>
                ) : (
                    <Button variant="contained" endIcon={icon} disableElevation>
                        {text}
                    </Button>
                )}
            </Stack>
        </StyledMyButton>
    );
};
