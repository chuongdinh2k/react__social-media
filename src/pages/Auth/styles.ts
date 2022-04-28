import styled from "styled-components";

export const StyledLogin = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    .login {
        &__wrapper {
            position: absolute;
            top: 50%;
            left: 60%;
            transform: translate(-50%, -50%);
            width: 85%;
            @media (max-width: 600px) {
                padding: 20px;
                width: 100%;
                padding-top: 40px;
                top: 10px;
                left: 0;
                transform: translate(0, 0);
            }
        }
        &__content {
            &-subtitle {
                font-weight: 700;
                text-transform: uppercase;
                color: gray;
            }
            &-subtitle2 {
                color: gray;
            }

            h2 {
                font-size: 60px;
                color: white;
                font-weight: 700;
                padding: 20px 0;
                @media (max-width: 980px) {
                    font-size: 45px;
                }
                @media (max-width: 600px) {
                    font-size: 30px;
                }
            }
        }
        &__form {
            padding-top: 20px;
            width: 75%;
            @media (max-width: 600px) {
                width: 100%;
            }
            &-input {
                width: 100%;
                @media (max-width: 600px) {
                    padding: 5px 0;
                }
            }
            &-button {
                padding-top: 20px;
                @media (max-width: 600px) {
                    padding-top: 10px;
                }
                .MuiButton-root {
                    padding: 16px 20px;
                }
            }
            .MuiOutlinedInput-root {
                padding: 17px 20px;
            }
        }
    }
    .highlight {
        color: ${(p) => p.theme.colors.blue} !important;
        &:hover {
            cursor: pointer;
        }
    }
`;
