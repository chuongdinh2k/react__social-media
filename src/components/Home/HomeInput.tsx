import { Avatar, Box, Grid } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SendIcon from "@mui/icons-material/Send";

import { StyledHomeInput } from ".";
import { AppInput, AppButton } from "..";
import { formSchemaHomeInput } from "@utils";
interface IHomeInputProps {
    avatar?: string;
}
export const HomeInput = (props: IHomeInputProps) => {
    const { avatar } = props;
    // component state
    const initialValuesPackage = {
        status: "",
    };
    return (
        <StyledHomeInput>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Avatar src={avatar} />
                </Grid>
                <Grid item xs={11}>
                    <Formik
                        initialValues={initialValuesPackage}
                        onSubmit={(values, { resetForm }) => {
                            resetForm({ values: initialValuesPackage });
                        }}
                        validationSchema={formSchemaHomeInput}
                    >
                        {({ handleSubmit, values, handleChange }) => {
                            return (
                                <Box>
                                    <AppInput
                                        name="status"
                                        handleChange={handleChange("status")}
                                        value={values.status}
                                        placeholder="What's happening?"
                                    />
                                    <Box sx={{ paddingTop: "10px" }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={3}>
                                                <span className="btn__uploadImage">
                                                    <AppButton
                                                        icon={<ImageIcon />}
                                                        positionIcon="start"
                                                        text="Photo"
                                                        colorIcon="#4E9F3D"
                                                    />
                                                </span>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <span className="btn__uploadImage">
                                                    <AppButton
                                                        icon={<VideoCameraBackIcon />}
                                                        positionIcon="start"
                                                        text="Videos"
                                                        colorIcon="#FC4F4F"
                                                    />
                                                </span>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <span>
                                                    <AppButton
                                                        icon={<PictureAsPdfIcon />}
                                                        positionIcon="start"
                                                        text="PDF"
                                                    />
                                                </span>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <span>
                                                    <AppButton
                                                        icon={<DateRangeIcon />}
                                                        positionIcon="start"
                                                        text="Schedule"
                                                    />
                                                </span>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <span>
                                                    <AppButton
                                                        icon={<SendIcon />}
                                                        positionIcon="start"
                                                        text="Post"
                                                        backgroundColor="#5486C1"
                                                        onClick={() => handleSubmit()}
                                                    />
                                                </span>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            );
                        }}
                    </Formik>
                </Grid>
            </Grid>
        </StyledHomeInput>
    );
};
