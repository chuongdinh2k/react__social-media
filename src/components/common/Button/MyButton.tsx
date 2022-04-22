import { Button, Stack } from "@mui/material";
import React from "react";

import { StyledMyButton } from ".";

interface IMyButtonProps {
    icon?: any;
    positionIcon?: string;
    text?: string;
    backgroundColor?: string;
    color?: string;
    onClick?: any;
    type?: string;
    colorIcon?: string;
    borderColor?: string;
}

export const AppButton = (props: IMyButtonProps) => {
    const {
        icon,
        positionIcon,
        colorIcon,
        borderColor,
        onClick,
        type,
        color,
        text,
        backgroundColor,
    } = props;
    return (
        <StyledMyButton
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            color={color}
            colorIcon={colorIcon}
        >
            <Stack direction="row" spacing={2}>
                {positionIcon === "start" ? (
                    <Button onClick={onClick} variant="outlined" startIcon={icon} disableElevation>
                        {text}
                    </Button>
                ) : (
                    <Button onClick={onClick} variant="contained" endIcon={icon} disableElevation>
                        {text}
                    </Button>
                )}
            </Stack>
        </StyledMyButton>
    );
};
