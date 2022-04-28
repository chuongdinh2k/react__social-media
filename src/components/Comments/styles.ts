import styled from "styled-components";

export const StyledCommentInput = styled.div`
    .tag {
        color: white;
        font-size: 12px;
        margin-bottom: 10px;
        &__icon {
            cursor: pointer;
            .MuiSvgIcon-root {
                padding-top: 7px;
                width: 1em;
                height: 1em;
            }
        }
    }
`;
export const StyledCommentUser = styled.div`
    background-color: #4e5364;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    .comment {
        &__name {
            padding-left: 5px;
            display: flex;
            justify-content: space-between;
            &-title {
                font-size: 18px;
                font-weight: 600;
                color: ${(p) => p.theme.colors.text};
                padding-right: 10px;
                @media (max-width: 600px) {
                    font-size: 14px;
                }
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
        &__listBtn {
            padding-left: 5px;
        }
        &__btn {
            font-size: 13px;
            font-weight: 600;
            color: ${(p) => p.theme.colors.text};
            padding-right: 20px;
            cursor: pointer;
            &:hover {
                color: ${(p) => p.theme.colors.blue};
                transform: translateX(-5px);
            }
            &-number,
            &-text {
                padding-left: 5px;
            }
        }
    }
`;
