import styled from "styled-components";

interface IStyledMyButton {
    backgroundColor?: string;
    backgroundColorHover?: string;
    color?: string;
    colorIcon?: string;
    borderColor?: string;
}
export const StyledMyButton = styled.div<IStyledMyButton>`
    .MuiButton-root {
        width: 100%;
        border-radius: 20px;
        background-color: ${(p) => p.backgroundColor || "#3B3E49"};
        font-weight: 600;
        color: ${(p) => p.color || p.theme.colors.text};
        text-transform: capitalize;
        border-color: ${(p) => (p.backgroundColor === "transparent" ? "gray" : p.backgroundColor)};
        padding: 10px 16px;
        font-size: 12px;
        &:hover {
            background-color: ${(p) => p.theme.colors.blue};
            color: white;
            .MuiSvgIcon-root {
                color: ${(p) => p.colorIcon || "white"};
            }
        }
        .MuiSvgIcon-root {
            color: ${(p) => p.colorIcon || p.theme.colors.text};
        }
    }
    .MuiLoadingButton-root {
        .Mui-disabled {
            background-color: #5486c1 !important;
        }
    }
`;
export const StyledAppSwitch = styled.div`
    .MuiTypography-root {
        color: ${(p) => p.theme.colors.text};
    }
`;
