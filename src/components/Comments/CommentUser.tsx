import React from "react";
import { Grid, Avatar, Box, Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import { StyledCommentUser } from "./styles";
import { shortenText, timeFromNow } from "@utils";

interface IProps {
    comment?: any;
    getNameToReply: (value: string) => void;
}

export const CommentUser = (props: IProps) => {
    const { getNameToReply, comment } = props;
    const [openReComment, setOpenReComment] = React.useState(false);

    return (
        <StyledCommentUser>
            <Grid container spacing={2}>
                <Grid item xs={2} sm={2} md={1}>
                    <Avatar src={comment.avatar} />
                </Grid>
                <Grid item xs={10} sm={10} md={11}>
                    <Box>
                        <div className="comment">
                            <div className="comment__name">
                                <Box sx={{ display: "flex" }}>
                                    <span className="comment__name-title">
                                        {shortenText(`${comment.firstname} ${comment.lastname}`, 6)}
                                    </span>
                                    <span className="comment__name-nickname">
                                        @{comment.nickname}
                                    </span>
                                </Box>

                                <p className="comment__time">{timeFromNow(comment.createdAt)}</p>
                                {/* <span className="comment__iconMore" onClick={handleClick}>
                                    <MoreHorizIcon />
                                </span> */}
                            </div>
                            <p className="newfeed__content">this is good post, i love it!</p>
                            <div className="comment__listBtn">
                                <span className="comment__btn">
                                    <ThumbUpIcon
                                        sx={{
                                            width: "0.5em",
                                            height: "0.5em",
                                        }}
                                    />
                                    <span className="comment__btn-number">(1)</span>
                                </span>
                                <span className="comment__btn">
                                    <ThumbDownIcon
                                        sx={{
                                            width: "0.5em",
                                            height: "0.5em",
                                        }}
                                    />
                                    <span className="comment__btn-number">(1)</span>
                                    {/* <span className="comment__btn-text">Dislike</span> */}
                                </span>
                                <span
                                    className="comment__btn"
                                    onClick={() => setOpenReComment(!openReComment)}
                                >
                                    <span
                                        className="comment__btn-text"
                                        onClick={() => getNameToReply(comment.nickname)}
                                    >
                                        Reply
                                    </span>
                                    <span className="comment__btn-number">(1)</span>
                                </span>
                            </div>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </StyledCommentUser>
    );
};
