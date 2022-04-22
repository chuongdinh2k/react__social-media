import styled from "styled-components";

export const StyledSideBarMenu = styled.div`
    height: 100%;
    background-color: ${(p) => p.theme.colors.drawer.backgroundDrawer} !important;
    .MuiTypography-root {
        color: ${(p) => p.theme.colors.drawer.textDrawer} !important;
    }
`;

export const StyledDrawer = styled.div`
    .MuiPaper-root {
        width: 250px;
    }
`;
