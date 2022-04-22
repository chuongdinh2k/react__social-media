import React from "react";
import { Avatar, Box, Grid } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { StyledHomeNews } from "./styles";
import { AppButton } from "..";
import { INewfeed } from "@interfaces";
import { numberReacts, timeFromNow } from "@utils";

interface IProps {
    newfeed: INewfeed;
}
export const HomeNews = (props: IProps) => {
    const {
        id,
        firstname,
        lastname,
        nickname,
        avatar,
        updatedAt,
        isMarked,
        content,
        totalReact,
        totalComment,
    } = props.newfeed;
    console.log(avatar);
    const [heart, setHeart] = React.useState<boolean>(false);
    return (
        <StyledHomeNews>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Avatar src={avatar} />
                </Grid>
                <Grid item xs={11}>
                    <Box>
                        <div className="newfeed">
                            <div className="newfeed__name">
                                <span>
                                    <span className="newfeed__name-title">
                                        {lastname} {firstname}
                                    </span>
                                    <span className="newfeed__name-mark">
                                        {isMarked && <CheckCircleIcon />}
                                    </span>
                                    <span className="newfeed__name-nickname">{nickname}</span>
                                </span>
                                <span className="newfeed__iconMore">
                                    <MoreHorizIcon />
                                </span>
                            </div>
                            <p className="newfeed__time">{timeFromNow(updatedAt)}</p>
                            <p className="newfeed__content">{content}</p>
                            <div className="newfeed__react">
                                <div className="newfeed__react-list">
                                    <span className="newfeed__react-icon heart">
                                        <FavoriteIcon />
                                    </span>
                                    <span className="newfeed__react-icon heart">
                                        <FavoriteIcon />
                                    </span>
                                    <span className="newfeed__react-icon heart">
                                        <FavoriteIcon />
                                    </span>
                                    <span className="newfeed__react-total">
                                        {numberReacts(totalReact)}
                                    </span>
                                </div>
                                <div className="newfeed__react-comment">
                                    <span>{totalComment} comments</span>
                                </div>
                            </div>
                        </div>
                        <Box sx={{ paddingTop: "10px" }}>
                            <Grid container spacing={4}>
                                <Grid item xs={4}>
                                    <span className="btn__like">
                                        <AppButton
                                            icon={<FavoriteIcon />}
                                            positionIcon="start"
                                            text="Like"
                                            backgroundColor="#28343E"
                                            colorIcon={heart ? "#f8485e" : "white"}
                                            onClick={() => setHeart(!heart)}
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={4}>
                                    <span className="btn__uploadImage">
                                        <AppButton
                                            icon={<ChatBubbleIcon />}
                                            positionIcon="start"
                                            text="Comments"
                                            backgroundColor="#28343E"
                                        />
                                    </span>
                                </Grid>
                                <Grid item xs={4}>
                                    <span>
                                        <AppButton
                                            icon={<ScreenShareIcon />}
                                            positionIcon="start"
                                            text="Share"
                                            backgroundColor="#28343E"
                                        />
                                    </span>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </StyledHomeNews>
    );
};
