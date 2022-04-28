import { Avatar } from "@mui/material";
import { getFirstLetter } from "@utils";
import React from "react";
import styled from "styled-components";

type IProps = {
    firstname?: string;
    avatar?: string;
};

export const AppAvatar = (props: IProps) => {
    const { firstname, avatar } = props;
    return (
        <StyledAppAvatar>
            <Avatar src={avatar}>{getFirstLetter(firstname)}</Avatar>
        </StyledAppAvatar>
    );
};

const StyledAppAvatar = styled.div`
    .MuiAvatar-root {
        width: 40px;
        height: 40px;
        font-size: 20px;
        font-weight: bold;
    }
`;
