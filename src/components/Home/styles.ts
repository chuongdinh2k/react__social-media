import styled from "styled-components";

import { IHomeProfileViewProps } from "./HomeProfileView";

export const StyledHomeComponent = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    .wrapperUserInfo {
        width: 100%;
        position: relative;
    }
    .newfeeds {
        height: 100vh;
        max-height: 100vh;
        overflow-y: auto;
    }
`;
export const StyledHomeProfileView = styled.div<IHomeProfileViewProps>`
    .user {
        /* position: absolute;
        left: 0;
        top: 0; */
        width: 100%;
        border-radius: 10px;
        margin-bottom: 20px;
        overflow: hidden;
        background-color: ${(p) => p.theme.colors.backgroundInput};
        box-shadow: ${(p) => p.theme.colors.boxShadow};
        @media (max-width: 980px) {
            display: none;
        }
        &__banner {
            width: 100%;
            height: 70px;
            background-image: url(${(p) => p.backgroundImage});
            background-size: cover;
            background-position: cover;
        }
        &__info {
            text-align: center;
            position: relative;
            padding-bottom: 20px;
            @media (max-width: 768px) {
                padding-top: 20px;
            }
        }
        &__avatar {
            position: absolute;
            z-index: 1;
            left: 40%;
            top: -30%;
            .MuiAvatar-root {
                width: 70px;
                height: 70px;
                font-size: 40px;
                font-weight: bold;
            }
            @media (max-width: 768px) {
                left: 41%;
                top: -30%;
                .MuiAvatar-root {
                    width: 100px;
                    height: 100px;
                }
            }
        }
        &__name {
            font-size: 24px;
            text-transform: capitalize;
            color: ${(p) => p.theme.colors.text};
            padding-top: 2.2rem;
            padding-bottom: 1rem;
        }
        &__nickname {
            color: gray;
        }
        &__status {
            padding-top: 10px;
            color: ${(p) => p.theme.colors.text};
        }
        &__bottom {
            display: flex;
            justify-content: center;
            padding: 10px 0;
            &-btn {
                text-transform: capitalize;
            }
        }
    }
`;

export const StyledHomeInput = styled.div`
    padding: 20px;
    border-radius: 10px;
    background-color: ${(p) => p.theme.colors.backgroundInput};
    box-shadow: ${(p) => p.theme.colors.boxShadow};
`;

export const StyledHomeNews = styled.div`
    margin: 20px 0;
    padding: 20px;
    border-radius: 10px;
    background-color: ${(p) => p.theme.colors.backgroundInput};
    box-shadow: ${(p) => p.theme.colors.boxShadow};
    @media (max-width: 600px) {
        padding: 0px;
        background-color: transparent;
    }
    .newfeed {
        &__name {
            padding-left: 5px;
            display: flex;
            justify-content: space-between;
            &-title {
                font-size: 18px;
                font-weight: 600;
                color: ${(p) => p.theme.colors.text};
            }
            &-mark {
                vertical-align: baseline;
                padding: 0 10px;
                .MuiSvgIcon-root {
                    color: #5486c1;
                }
            }
            &-nickname {
                color: gray;
            }
        }
        &__iconMore {
            cursor: pointer;
            .MuiSvgIcon-root {
                color: gray;
            }
            &:hover {
                .MuiSvgIcon-root {
                    color: white;
                }
            }
        }
        &__time {
            padding-left: 5px;
            color: gray;
            font-size: 14px;
        }
        &__content {
            padding: 10px 0;
            padding-left: 5px;
            color: ${(p) => p.theme.colors.text};
            /* text-align: justify; */
        }
        &__showImage {
            width: 100%;
            padding: 5px;
        }

        &__react {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            &-icon {
                margin-right: 5px;
                padding: 2px 5px;
                border-radius: 100%;
                background-color: #f8485e;
                @media (max-width: 980px) {
                    padding: 2px 5px;
                }
                .MuiSvgIcon-root {
                    color: white;
                    font-size: 14px;
                }
            }
            &-total,
            &-comment {
                color: gray;
                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
            &-total {
                padding-left: 10px;
            }
        }
        .activeLike {
            .MuiSvgIcon-root {
                color: #f8485e;
            }
        }
        .btn__like {
            .MuiButton-startIcon {
                @media (max-width: 600px) {
                    margin-right: 0 !important;
                }
            }
            &:hover {
                .MuiSvgIcon-root {
                    color: #f8485e !important;
                }
            }
        }
        &__options {
            padding: 20px;
            &-item {
                padding: 5px 10px;
                font-size: 14px;
                text-transform: capitalize;
                transition: 250ms;
            }
            &:hover {
                background-color: gray;
            }
        }
        /* .MuiButton-root {
        }
        .MuiButton-startIcon {
            @media (max-width: 600px) {
                margin-right: 0;
            }
        } */
    }
`;
