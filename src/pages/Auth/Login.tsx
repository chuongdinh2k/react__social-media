import React from "react";
import { Grid } from "@mui/material";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";

import { ILogin } from "@interfaces";
import { formSchemaLoginForm } from "@utils";
import { AppButton, AppInput } from "@components";
import { StyledLogin } from "./styles";
import { useDispatch } from "react-redux";
import { login, useAppSelector, selectAuth } from "@redux";
import { appRoutesEnum, authRoutesEnum } from "@enums";

export const Login = () => {
    const history = useHistory();
    const auth = useAppSelector(selectAuth);
    const token = auth?.userInfo?.token;
    React.useLayoutEffect(() => {
        if (token) {
            history.push(appRoutesEnum.HOME);
        }
    }, [token]);
    const dispatch = useDispatch();
    const initialValuesPackage: ILogin = {
        email: "",
        password: "",
    };
    return (
        <StyledLogin>
            <div className="login__wrapper">
                <div className="login__content">
                    <p className="login__content-subtitle">Start for free</p>
                    <h2>
                        Login to enjoy<span className="highlight">!</span>
                    </h2>
                    <p className="login__content-subtitle2">
                        Don't you have an account?{" "}
                        <span
                            className="highlight"
                            onClick={() => history.push(authRoutesEnum.SIGNUP)}
                        >
                            Sign Up
                        </span>
                    </p>
                    <div className="login__form">
                        <Formik
                            initialValues={initialValuesPackage}
                            onSubmit={(values, { resetForm }) => {
                                dispatch(login({ values, dispatch }));
                                // resetForm({ values: initialValuesPackage });
                            }}
                            validationSchema={formSchemaLoginForm}
                        >
                            {({ handleSubmit, values, handleChange }) => {
                                return (
                                    <>
                                        <Grid container justifyContent="center" spacing={2}>
                                            <Grid item xs={12}>
                                                <div className="login__form-input">
                                                    <AppInput
                                                        placeholder="Enter your email"
                                                        name="email"
                                                        handleChange={handleChange("email")}
                                                        icon={<EmailIcon />}
                                                        value={values.email}
                                                        multiline={false}
                                                        label="Email"
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className="login__form-input">
                                                    <AppInput
                                                        placeholder="Enter your password"
                                                        name="password"
                                                        handleChange={handleChange("password")}
                                                        isPassword
                                                        value={values.password}
                                                        multiline={false}
                                                        label="Password"
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <div className="login__form-button">
                                                    <AppButton
                                                        text="LOGIN"
                                                        backgroundColor="#1976d2"
                                                        onClick={() => handleSubmit()}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <div className="login__form-button">
                                                    <AppButton
                                                        text="Login with Google"
                                                        backgroundColor="#f8485e"
                                                        positionIcon="start"
                                                        icon={<GoogleIcon />}
                                                    />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </StyledLogin>
    );
};
