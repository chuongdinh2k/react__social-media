import styled from "styled-components";

interface IStyledAppInput {
    isBorder?: boolean;
}
export const StyledAppInput = styled.div<IStyledAppInput>`
    .MuiFormControl-root {
        width: 100%;
        margin: 0;
        fieldset {
            border-color: ${(p) => (!p.isBorder ? "transparent" : "gray")};
            &:hover {
                border-color: ${(p) => (!p.isBorder ? "transparent" : "gray")};
            }
        }
        .MuiOutlinedInput-root {
            color: white;
            border-radius: 10px;
            background-color: ${(p) => p.theme.colors.backgroundInput} !important;
            padding: 12px 14px;
            .MuiOutlinedInput-input {
                font-size: 14px;
                padding: 0;
            }
            @media (max-width: 600px) {
                font-size: 10px;
                .MuiButton-startIcon {
                    /* margin-right: 0; */
                }
            }
        }
        .MuiSvgIcon-root {
            color: white !important;
        }
        .MuiInputLabel-root {
            color: #d8d2cb;
        }
        @media (max-width: 768px) {
            margin: 0;
        }
    }
`;
export const InputWrapper = styled.div``;
export const LabelWrapper = styled.div``;
export const Error = styled.span`
    font-size: 14px;
    color: ${(p) => p.theme.colors.red};
    @media (max-width: 600px) {
        font-size: 12px;
    }
`;
