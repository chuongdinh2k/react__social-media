import styled from "styled-components";

export interface IIconProps {
    color?: string;
    fontSize?: any;
    colorHover?: string;
}

export const StyledIcon = styled.span<IIconProps>`
    cursor: pointer;
    .MuiSvgIcon-root {
        color: white;
    }
    &:hover {
        .MuiSvgIcon-root {
            color: ${(p) => p.theme.colors.blue};
        }
    }
`;
