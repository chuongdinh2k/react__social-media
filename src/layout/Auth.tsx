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
            <div className="layer"></div>
            <div className="children">
                <Grid container>
                    <Grid item xs={12} md={6}>
                        {children}
                    </Grid>
                </Grid>
            </div>
        </StyledAuth>
    );
};

const StyledAuth = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    background-image: url("https://cdn.wallpapersafari.com/57/8/w2QjqT.jpg");
    background-size: cover;
    @media (max-width: 600px) {
        min-height: 110vh;
    }
    .layer {
        background-color: ${(p) => p.theme.colors.darkBlack};
        position: absolute;
        z-index: 1;
        height: 100%;
        width: 100%;
        opacity: 0.9;
    }
    .children {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
    }
`;
