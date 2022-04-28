import styled from "styled-components";
import { APP_HEADER } from "@configs";

export const StyledAppTopBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    height: ${APP_HEADER}px;
    .header {
        &__right {
            display: flex;
        }
        &__logo {
            cursor: pointer;
            /* padding-top: 10px; */
            padding-right: 10px;
            @media (max-width: 768px) {
                padding-top: 0;
            }
        }
        &__search {
            position: relative;
        }
        &__left {
            display: flex;
            justify-content: flex-end;
        }
        &__btnMobile {
            display: none;
            .MuiSvgIcon-root {
                color: white;
            }
            @media (max-width: 980px) {
                display: flex;
                justify-content: flex-end;
            }
        }
        &__menu {
            display: flex;
            padding-top: 5px;
            &-list {
                padding-left: 20px;
                transition: 250ms;
                &:hover {
                    transform: translateY(-5px);
                }
            }
            @media (max-width: 768px) {
                display: none;
            }
            .btnHome {
                .MuiButton-root {
                    &:hover {
                        .MuiSvgIcon-root {
                            color: white;
                        }
                    }
                }
            }
            &-user {
                display: flex;
                padding: 5px 10px;
                border-radius: 40px;
                background-color: ${(p) => p.theme.colors.backgroundInput};
                cursor: pointer;
                .text {
                    padding: 3px 7px;
                    padding-top: 8px;
                    color: white;
                    text-transform: capitalize;
                    /* color: ${(p) => p.theme.colors.text}; */
                }
                &:hover {
                    background-color: ${(p) => p.theme.colors.blue};
                }
            }
        }
    }
`;
