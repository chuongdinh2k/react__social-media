import React from "react";
import { List, ListItem, Divider, Avatar } from "@mui/material";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

interface IStyled {
    open: boolean;
}
interface IProps {
    open: boolean;
    dataInputBounce?: any;
    loadingDebounce?: boolean;
    onChangeDebounce?: (value: string | undefined) => void;
}
const ERROR_404_DATA = "Data not found! ";
export const ComponentPopOver = (props: IProps) => {
    const { open, dataInputBounce, loadingDebounce, onChangeDebounce } = props;
    return (
        <StyledComponentPopover open={open}>
            <div className="wrapperPopover">
                {loadingDebounce ? (
                    <span className="loading">
                        <CircularProgress size={20} />
                    </span>
                ) : (
                    <List component="nav">
                        {dataInputBounce && dataInputBounce?.length > 0 ? (
                            dataInputBounce?.map((item: any, index: number) => (
                                <div key={index}>
                                    {/* <Divider /> */}
                                    <ListItem
                                        button
                                        onClick={() => {
                                            onChangeDebounce?.(
                                                `${item?.firstname} ${item?.lastname} `
                                            );
                                        }}
                                    >
                                        <Avatar src={item?.avatar} alt="avatar"></Avatar>
                                        <div className="user__text">
                                            <span className="user__name">
                                                {item?.firstname} {item?.lastname}
                                            </span>
                                            <span className="user__nickname">{item?.nickname}</span>
                                        </div>
                                    </ListItem>
                                    <Divider />
                                </div>
                            ))
                        ) : (
                            <p className="popup__error">{ERROR_404_DATA}</p>
                        )}
                    </List>
                )}
            </div>
        </StyledComponentPopover>
    );
};
const StyledComponentPopover = styled.div<IStyled>`
    position: absolute;
    width: 100%;
    height: 10rem;
    border-radius: 5px;
    max-height: 20rem;
    background-color: #f7f7f7;
    z-index: 9;
    display: ${(p) => (p.open === true ? "block" : "none")};
    background-color: ${(p) => p.theme.colors.backgroundGray};
    color: ${(p) => p.theme.colors.darlBlack};
    overflow-y: auto;
    .wrapperPopover {
        width: 100%;
        height: 100%;
        position: relative;
        .loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .popup {
        &__error {
            text-align: center;
            color: ${(p) => p.theme.colors.red};
            font-size: 14px;
        }
    }
    .user {
        &__text {
            padding-left: 4px;
            display: flex;
            flex-direction: column;
        }
        &__name {
            font-size: 14px;
        }
        &__nickname {
            color: gray;
            font-size: 12px;
        }
    }
`;
