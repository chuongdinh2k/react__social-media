import * as React from "react";
import Badge from "@mui/material/Badge";
import styled from "styled-components";

interface IAppBagdeProps {
    value?: number;
    color?: any;
    icon?: any;
}
export const AppBadge = (props: IAppBagdeProps) => {
    const { value = 1, color = "error", icon } = props;
    return (
        <StyledBadge>
            <Badge
                color={color}
                badgeContent={value}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                {icon}
            </Badge>
        </StyledBadge>
    );
};

const StyledBadge = styled.div`
    cursor: pointer;
    .MuiSvgIcon-root {
        color: white;
    }
    &:hover {
        .MuiSvgIcon-root {
            color: ${(p) => p.theme.colors.blue} !important;
        }
    }
`;
