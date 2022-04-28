import styled from "styled-components";

export const StyledSideBarMenu = styled.div`
    height: 100%;
    background-color: ${(p) => p.theme.colors.drawer.backgroundDrawer} !important;
    .MuiTypography-root {
        color: ${(p) => p.theme.colors.drawer.textDrawer} !important;
    }
    .sidebar {
        .highlight {
            font-size: 24px;
            font-weight: 700px;
            color: ${(p) => p.theme.colors.blue};
        }
        &__box {
            padding-top: 20px;
        }
        li:first-child {
            /* padding: 0 30px; */
            padding-bottom: 20px;
            span {
                padding-left: 5px;
            }
            &:hover {
                background-color: transparent;
            }
        }
        li:nth-child(2) {
            border-radius: 40px;
            background-color: #aeafb0;
            margin-bottom: 10px;
        }
        &__box {
            /* background-color: ${(p) => p.theme.colors.blue}; */
            width: 250px;
        }
        &__list {
            display: flex;
            &:hover {
                border-radius: 40px;
                background-color: #aeafb0;
                margin-bottom: 10px;
            }
        }
        &__item {
            width: 100%;
            display: flex;
            padding: 5px 20px;
            .username {
                display: inline-block;
                padding-left: 10px;
                padding-top: 10px;
            }
            &-icon {
                width: 21%;
            }
            &-text {
                font-weight: 600;
            }
        }
    }
`;

export const StyledDrawer = styled.div`
    .MuiPaper-root {
        width: 250px;
    }
`;
