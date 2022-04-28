import { Grid } from "@mui/material";
import React from "react";
import { ListRooms } from "./ListRooms";

import { StyledChatContent } from "./styles";

export const ChatContent = () => {
    return (
        <StyledChatContent>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={4}>
                    <ListRooms />
                </Grid>
                <Grid item xs={12} sm={8} md={4}>
                    2
                </Grid>
                <Grid item xs={12} sm={8} md={4}>
                    3
                </Grid>
            </Grid>
        </StyledChatContent>
    );
};
