import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { makeStyles } from "@mui/material/styles";
import styled from "styled-components";

import { resetSnackbar, useAppSelector, selectApp } from "@redux";

/**
 * SnackBar component
 * Render notification messages
 */

export const AppSnackBar = () => {
    const app = useAppSelector(selectApp);
    const { show, message, messageType, langKey, anchorOrigin } = app.snackbar;
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(resetSnackbar());
    };

    if (show) {
        const keyOfMessage = new Date().getTime();
        return (
            <StyledSnackbar>
                <Snackbar
                    key={keyOfMessage}
                    anchorOrigin={anchorOrigin ?? { vertical: "top", horizontal: "center" }}
                    open={show}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert
                        elevation={6}
                        variant="filled"
                        onClose={handleClose}
                        severity={messageType}
                        iconMapping={{ warning: <></> }}
                    >
                        {Array.isArray(message) ? (
                            <>
                                {message?.map((mes, index) => (
                                    <p key={index}>{mes}</p>
                                ))}
                            </>
                        ) : (
                            <>{message}</>
                        )}
                    </Alert>
                </Snackbar>
            </StyledSnackbar>
        );
    }
    return null;
};

const StyledSnackbar = styled.div`
    width: "100%";
`;
