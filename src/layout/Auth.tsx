import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

type Props = {
    children?: string | JSX.Element | JSX.Element[];
};

export const LayoutAuth = (props: Props) => {
    const { children } = props;
    return (
        <StyledAuth>
            <Grid container>
                <Grid item xs={12} md={6}>
                    {children}
                </Grid>
            </Grid>
        </StyledAuth>
    );
};

const StyledAuth = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${(p) => p.theme.colors.darkBlack};
`;
