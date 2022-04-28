import React from "react";
import { StyledCommentInput } from "./styles";
import { Formik } from "formik";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";

import { AppInput, AppButton } from "..";
import { formSchemaCommentInput } from "@utils";
import { Grid } from "@mui/material";

interface IProps {
    value?: string;
    ref?: any;
    getNameToReply: (value: any) => void;
}
export const CommentInput = React.forwardRef((props: IProps, ref: any) => {
    const { value, getNameToReply } = props;
    const initialValuesPackage = {
        comment: ``,
    };
    return (
        <StyledCommentInput>
            {value && (
                <span className="tag">
                    <span>Is replying @{value}</span>
                    <span
                        className="tag__icon"
                        onClick={() => {
                            getNameToReply("");
                        }}
                    >
                        <CancelIcon
                            sx={{
                                paddingLeft: "5px",
                                width: "0.7em",
                                height: "0.7em",
                                color: "#f8485e",
                            }}
                        />
                    </span>
                </span>
            )}
            <Formik
                initialValues={initialValuesPackage}
                onSubmit={(values, { resetForm }) => {
                    resetForm({ values: initialValuesPackage });
                }}
                validationSchema={formSchemaCommentInput}
            >
                {({ handleSubmit, values, handleChange }) => {
                    return (
                        <div className="commentForm" ref={ref}>
                            <Grid container spacing={2}>
                                <Grid item xs={8} sm={10}>
                                    <AppInput
                                        value={values.comment}
                                        name="comment"
                                        handleChange={handleChange("comment")}
                                        placeholder="Enter your comment"
                                        multiline={true}
                                    />
                                </Grid>
                                <Grid item xs={4} sm={2}>
                                    <AppButton
                                        text="Send"
                                        icon={<SendIcon />}
                                        backgroundColor="#5486C1"
                                        onClick={() => handleSubmit()}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    );
                }}
            </Formik>
        </StyledCommentInput>
    );
});
