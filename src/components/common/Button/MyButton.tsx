import { Button, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React from "react";

import { StyledMyButton } from ".";
import { CircularProgress } from "@mui/material";
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
    disabled?: boolean;
    loading?: boolean;
}

export const AppButton = (props: IMyButtonProps) => {
    const {
        icon,
        positionIcon,
        colorIcon,
        borderColor,
        onClick,
        color,
        text,
        backgroundColor,
        loading,
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
                    <LoadingButton
                        // disabled={loading}
                        onClick={onClick}
                        variant="outlined"
                        startIcon={loading ? "" : icon}
                        loading={loading}
                        loadingIndicator="Loading..."
                        // disableElevation
                    >
                        {text}
                    </LoadingButton>
                ) : (
                    <LoadingButton
                        // disabled={loading}
                        onClick={onClick}
                        variant="contained"
                        endIcon={loading ? "" : icon}
                        loading={loading}
                        loadingIndicator="Loading..."
                        // disableElevation
                    >
                        {text}
                    </LoadingButton>
                )}
            </Stack>
        </StyledMyButton>
    );
};
