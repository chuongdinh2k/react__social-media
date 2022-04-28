import { Avatar, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { useAppSelector, selectAuth } from "@redux";

import { StyledHomeProfileView } from "./styles";
import { avatar } from "@mockup";
import { getFirstLetter } from "@utils";
export interface IHomeProfileViewProps {
    backgroundImage?: string;
}
export const HomeProfileView = (props: IHomeProfileViewProps) => {
    const userInfo = useAppSelector(selectAuth).userInfo;
    return (
        <StyledHomeProfileView backgroundImage={avatar}>
            <div className="user">
                <div className="user__banner"></div>
                <div className="user__info">
                    <div className="user__avatar">
                        <Avatar src={userInfo?.avatar}>
                            {getFirstLetter(userInfo?.firstname)}
                        </Avatar>
                    </div>
                    <p className="user__name">
                        {userInfo?.firstname} {userInfo?.lastname}
                        {/* {shortenText(`${userInfo?.firstname} ${userInfo?.lastname}`)} */}
                    </p>
                    <p className="user__nickname">@{userInfo?.nickname}</p>
                    <p className="user__status">*Empty*</p>
                </div>
                <Divider />
                <div className="user__bottom">
                    <Button className="user__bottom-btn">View Pofolio</Button>
                </div>
            </div>
        </StyledHomeProfileView>
    );
};
