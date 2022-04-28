import React from "react";
import { Avatar, Box, Grid } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Popover from "@mui/material/Popover";

import { StyledHomeNews } from "./styles";
import { AppButton, AppCollaspe, CommentUser, CommentInput, ShowImagesInPost } from "..";
import { INewfeed } from "@interfaces";
import { numberReacts, shortenText, timeFromNow } from "@utils";
import { useAppSelector, selectApp } from "@redux";
import { useWindowDimensions } from "@hooks";
import { comments } from "src/mockup/components/comment";
import { images } from "@mockup";

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
    // props
    const app = useAppSelector(selectApp);
    const theme = app.theme;
    // component variables
    const [heart, setHeart] = React.useState<boolean>(false);
    const width = useWindowDimensions().width;
    const [showComments, setShowComment] = React.useState<boolean>(false);
    const [reply, setReply] = React.useState<string>("");
    const refScroll = React.createRef<any>();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClickToShowPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };
    const getNameToReply = (value: string) => {
        setReply(value);
        if (refScroll.current) {
            refScroll.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const openPopover = Boolean(anchorEl);
    const idPopover = openPopover ? "simple-popover" : undefined;

    return (
        <StyledHomeNews>
            <Grid container spacing={2}>
                <Grid item xs={2} sm={2} md={1}>
                    <Avatar src={avatar} />
                </Grid>
                <Grid item xs={10} sm={10} md={11}>
                    <Box>
                        <div className="newfeed">
                            <div className="newfeed__name">
                                <Box sx={{ display: "flex" }}>
                                    <span className="newfeed__name-title">
                                        {shortenText(`${firstname} ${lastname}`, 10)}
                                    </span>
                                    <span className="newfeed__name-mark">
                                        {isMarked && <CheckCircleIcon />}
                                    </span>
                                    <span className="newfeed__name-nickname">@{nickname}</span>
                                </Box>
                                <span
                                    className="newfeed__iconMore"
                                    onClick={handleClickToShowPopover}
                                >
                                    <MoreHorizIcon />
                                </span>
                                <Popover
                                    id={idPopover}
                                    open={openPopover}
                                    anchorEl={anchorEl}
                                    onClose={handleClosePopover}
                                    // anchorOrigin={{
                                    //   vertical: 'bottom',
                                    //   horizontal: 'left',
                                    // }}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                >
                                    <ListItemButton component="a">
                                        <ListItemText primary="Hide" />
                                    </ListItemButton>
                                    <ListItemButton component="a">
                                        <ListItemText primary="Report" />
                                    </ListItemButton>
                                </Popover>
                            </div>
                            <p className="newfeed__time">{timeFromNow(updatedAt)}</p>
                        </div>
                    </Box>
                </Grid>
            </Grid>
            <Box>
                <p className="newfeed__content">{content}</p>
                <Box>
                    <div className="newfeed__showImage">
                        <ShowImagesInPost listImages={images} />
                    </div>
                </Box>
                <div className="newfeed__react">
                    <div className="newfeed__react-list">
                        <span className="newfeed__react-icon heart">
                            <FavoriteIcon />
                        </span>
                        <span className="newfeed__react-total">{numberReacts(totalReact)}</span>
                    </div>
                    <div className="newfeed__react-comment">
                        <span onClick={() => setShowComment(!showComments)}>
                            {totalComment} comment
                        </span>
                    </div>
                </div>
            </Box>
            <Box>
                <div className="newfeed__comment">
                    <AppCollaspe open={showComments}>
                        <>
                            {comments.map((comment) => (
                                <div key={comment.id}>
                                    <CommentUser
                                        comment={comment}
                                        getNameToReply={getNameToReply}
                                    />
                                </div>
                            ))}
                            <CommentInput
                                getNameToReply={getNameToReply}
                                ref={refScroll}
                                value={reply}
                            />
                        </>
                    </AppCollaspe>
                </div>
            </Box>
            <Box sx={{ paddingTop: "10px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <span className="btn__like">
                            <AppButton
                                // icon={heart}
                                icon={heart ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                positionIcon="start"
                                text={width >= 600 ? "Like" : ""}
                                backgroundColor={theme === "light" ? "transparent" : "28343E"}
                                colorIcon={heart ? "#f8485e" : "black"}
                                onClick={() => setHeart(!heart)}
                            />
                        </span>
                    </Grid>
                    <Grid item xs={4}>
                        <span className="btn__uploadImage">
                            <AppButton
                                icon={<ChatBubbleIcon />}
                                positionIcon="start"
                                text={width >= 600 ? "Comment" : ""}
                                backgroundColor={theme === "light" ? "transparent" : "28343E"}
                                onClick={() => setShowComment(!showComments)}
                            />
                        </span>
                    </Grid>
                    <Grid item xs={4}>
                        <span>
                            <AppButton
                                icon={<ScreenShareIcon />}
                                positionIcon="start"
                                text={width >= 600 ? "Share" : ""}
                                backgroundColor={theme === "light" ? "transparent" : "28343E"}
                            />
                        </span>
                    </Grid>
                </Grid>
            </Box>
        </StyledHomeNews>
    );
};
