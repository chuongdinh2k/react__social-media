import React from "react";
import styledComponent from "styled-components";
import { Avatar, Badge, Grid } from "@mui/material";
import { avatar } from "@mockup";
import { styled } from "@mui/material/styles";

type Props = {
    type?: string;
};

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

type IAvatarProps = {
    type?: string;
    banner?: string;
};
const CustomAvatar = (props: IAvatarProps) => {
    const { type, banner } = props;
    if (type === "person") {
        return (
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
            >
                <Avatar alt="Remy Sharp" src={avatar} />
            </StyledBadge>
        );
    }
    return (
        <StyledAvatarGroup banner={banner}>
            <div className="listMembers">
                <span className="listMembers__number">+10</span>
            </div>
        </StyledAvatarGroup>
    );
};

export const RoomItem = (props: Props) => {
    const { type } = props;
    return (
        <StyledRoomItem>
            <Grid container>
                <Grid item xs={3}>
                    <CustomAvatar type={type} banner={avatar} />
                </Grid>
                <Grid item xs={8}>
                    <div className="chat__content">
                        <span className="chat__content-name">Your Partner's name</span>
                        <span className="chat__content-message">You: Test get lastest message</span>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <span className="chat__time">3h</span>
                </Grid>
            </Grid>
        </StyledRoomItem>
    );
};
const StyledRoomItem = styledComponent.div`
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    transition: 150ms;
    cursor: pointer;
    .MuiAvatar-root {
        width: 60px;
        height: 60px;
    }
    .chat {
        &__content {
            display: flex;
            flex-direction: column;
            &-name {
                color: ${(p) => p.theme.colors.text};
            }
            &-message {
                color: gray;
            }
        }
        &__time {
            color: gray;
        }
    }
    &:hover {
        background-color: #161422;
    }
`;

const StyledAvatarGroup = styledComponent.div<IAvatarProps>`
    width:60px;
    height: 60px;
    border-radius: 10px;
    position: relative;
    background-image: url(${(p) => p.banner});
    background-size: cover;
    background-position: center;
    .listMembers{
        position:absolute;
        bottom:0;
        right: 0;
        border-radius: 100%;
        background-color: white;
        padding: 2px;
        &__number{
            color: ${(p) => p.theme.colors.blue};
        }
    }
`;
