import React from "react";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import { StyledHomeComponent } from "./styles";
import { HomeProfileView, HomeInput, HomeNews } from ".";
import { SuggestionAccount } from "..";
import { useAppSelector, viewListPosts, selectPost, loadData } from "@redux";
import { postApi } from "@api";

const img =
    "data:image/jpeg;base64,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";

export const HomeContent = () => {
    // HOOKS
    const dispatch = useDispatch();
    const posts = useAppSelector(selectPost);

    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        dispatch(
            viewListPosts({
                page: page,
                limit: 6,
            })
        );
    }, [page]);
    // const fetchMoreData = async () => {
    //     const response = await postApi.getListPost({
    //         page: page + 1,
    //         limit: 6,
    //     });
    //     if (response.data.length === 0) {
    //         dispatch(loadData(response.data));
    //         return;
    //     } else {
    //         setTimeout(() => {
    //             // setBlogs([...blogs,...response.data.blogs]);
    //             setPage(page + 1);
    //             dispatch(dispatch(loadData(response.data)));
    //         }, 1000);
    //     }
    // };
    return (
        <StyledHomeComponent>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} sm={8} md={3}>
                    {/* <div className="wrapperUserInfo">
                        <HomeProfileView />
                    </div> */}{" "}
                    <HomeProfileView />
                    <SuggestionAccount />
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <div className="newfeeds">
                        <HomeInput avatar={img} />

                        {posts.listPosts.length &&
                            posts.listPosts.map((post: any, index: number) => (
                                <div key={index}>
                                    <HomeNews newfeed={post} />
                                </div>
                            ))}
                    </div>
                </Grid>
                <Grid item xs={12} sm={0} md={3}>
                    3
                </Grid>
            </Grid>
        </StyledHomeComponent>
    );
};
