import styled from "styled-components";

export const StyledChatContent = styled.div``;

export const StyledListRooms = styled.div`
    min-height: 100vh;
    .listRooms {
        width: 100%;
        border-radius: 10px;
        border: 1px solid gray;
        padding: 20px;
        .MuiBox-root {
            padding: 12px 0;
        }
        &__search {
            &-title {
                display: inline-block;
                padding-top: 5px;
                color: ${(p) => p.theme.colors.text};
                font-weight: 600px;
            }
            .MuiOutlinedInput-root {
                background-color: #3b3e4936 !important;
            }
        }
        &__list {
            padding-top: 20px;
            .Mui-selected {
                color: white;
                background-color: #1976d2;
                text-transform: capitalize;
                border-radius: 30px;
            }
            .MuiTab-root {
                color: white;
                text-transform: capitalize;
            }
        }
    }
`;
