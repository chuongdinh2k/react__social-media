import React from "react";
import { Avatar, Box, Grid } from "@mui/material";
import styled from "styled-components";

import { AppButton } from ".";
import { avatar } from "@mockup";

type Props = {
    test?: string;
    listUsers?: any;
};
export const SuggestionAccount = (props: Props) => {
    return (
        <StyledSuggestionAccount>
            <div className="suggestion__wrapper">
                <p className="suggestion__title">Who is to follow you?</p>
                <div className="suggestion__list">
                    <div className="suggestion__user">
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Avatar src={avatar} alt="avatar" />
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ paddingLeft: "5px" }}>
                                    <p className="suggestion__user-text">Product Hunt</p>
                                    <p className="suggestion__user-subText">@productionhunt</p>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <AppButton text="Follow" backgroundColor="white" color="black" />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="suggestion__user">
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Avatar src={avatar} alt="avatar" />
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ paddingLeft: "5px" }}>
                                    <p className="suggestion__user-text">Product Hunt</p>
                                    <p className="suggestion__user-subText">@productionhunt</p>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <AppButton text="Follow" backgroundColor="white" color="black" />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="suggestion__user">
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <div className="suggestion__user-avatar">
                                    <Avatar src={avatar} alt="avatar" />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ paddingLeft: "5px" }}>
                                    <p className="suggestion__user-text">Product Hunt</p>
                                    <p className="suggestion__user-subText">@productionhunt</p>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <AppButton
                                    text="Follow"
                                    backgroundColor="white"
                                    color="black"
                                    disabled
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <p className="suggestion__more">Show More</p>
            </div>
        </StyledSuggestionAccount>
    );
};

export const StyledSuggestionAccount = styled.div`
    .suggestion {
        &__wrapper {
            @media (max-width: 980px) {
                display: none;
            }
            padding: 20px;
            background-color: ${(p) => p.theme.colors.backgroundInput};
            box-shadow: ${(p) => p.theme.colors.boxShadow};
            border-radius: 10px;
        }
        &__title {
            color: ${(p) => p.theme.colors.text};
        }
        &__user {
            padding: 10px 0;
            &-avatar {
                cursor: pointer;
            }
            &-text {
                color: ${(p) => p.theme.colors.text};
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
            &-subText {
                color: gray;
                font-size: 14px;
            }
        }
        &__more {
            font-weight: 600;
            color: ${(p) => p.theme.colors.blue};
            font-size: 12px;
            cursor: pointer;
        }
    }
`;
