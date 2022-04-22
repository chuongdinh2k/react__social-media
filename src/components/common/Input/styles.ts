import styled from "styled-components";

export const StyledAppInput = styled.div`
    .MuiFormControl-root {
        width: 100%;
        margin: 0;
        fieldset {
        }
        .MuiOutlinedInput-root {
            color: white;
            border-radius: 10px;
            background-color: ${(p) => p.theme.colors.backgroundInput} !important;
            .MuiOutlinedInput-input {
                font-size: 14px;
                padding: 8px 14px;
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
`;
