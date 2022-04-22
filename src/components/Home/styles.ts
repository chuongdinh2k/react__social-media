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
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        background-color: ${(p) => p.theme.colors.backgroundInput};
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
            z-index: 99;
            left: 40%;
            top: -30%;
            .MuiAvatar-root {
                width: 70px;
                height: 70px;
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
            padding: 20px 0;
            &-btn {
                text-transform: capitalize;
            }
        }
    }
`;

export const StyledHomeInput = styled.div`
    padding: 10px 20px;
    border-radius: 10px;
    background-color: ${(p) => p.theme.colors.backgroundInput};
`;

export const StyledHomeNews = styled.div`
    margin: 20px 0;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: ${(p) => p.theme.colors.backgroundInput};
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
            color: #f6f6f6;
        }
        &__react {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            &-icon {
                margin-right: 5px;
                padding: 4px 4px 2px 4px;
                border-radius: 100%;
                background-color: #f8485e;
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
            &:hover {
                .MuiSvgIcon-root {
                    color: #f8485e !important;
                }
            }
        }
    }
`;
