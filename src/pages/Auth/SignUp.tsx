import React from "react";
import { Grid } from "@mui/material";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch } from "react-redux";

import { formSchemaSignUpForm } from "@utils";
import { AppButton, AppInput } from "@components";
import { StyledLogin } from "./styles";
import { useAppSelector, selectAuth, signUp } from "@redux";
import { appRoutesEnum, authRoutesEnum } from "@enums";
import { useWindowDimensions } from "@hooks";

export const SignUp = () => {
    const history = useHistory();
    const auth = useAppSelector(selectAuth);
    const token = auth?.userInfo?.token;
    React.useLayoutEffect(() => {
        if (token) {
            history.push(appRoutesEnum.HOME);
        }
    }, [token]);
    // WHAT: get width of screen
    const width = useWindowDimensions().width;
    const dispatch = useDispatch();
    const initialValuesPackage = {
        lastname: "",
        firstname: "",
        nickname: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    return (
        <StyledLogin>
            <div className="login__wrapper">
                <div className="login__content">
                    <p className="login__content-subtitle">Start for free</p>
                    <h2>
                        Create new account<span className="highlight">.</span>
                    </h2>
                    <p className="login__content-subtitle2">
                        Already A Member?{" "}
                        <span
                            className="highlight"
                            onClick={() => history.push(authRoutesEnum.LOGIN)}
                        >
                            Log In
                        </span>
                    </p>
                    <div className="login__form">
                        <Formik
                            initialValues={initialValuesPackage}
                            onSubmit={(values, { resetForm }) => {
                                dispatch(signUp({ values, dispatch }));
                                // resetForm({ values: initialValuesPackage });
                            }}
                            validationSchema={formSchemaSignUpForm}
                        >
                            {({ handleSubmit, values, handleChange }) => {
                                return (
                                    <>
                                        <Grid container justifyContent="center" spacing={2}>
                                            <Grid item xs={6} sm={6}>
                                                <div className="login__form-input">
                                                    <AppInput
                                                        placeholder="First Name"
                                                        name="firstname"
                                                        handleChange={handleChange("firstname")}
                                                        icon={<AccountBoxIcon />}
                                                        value={values.firstname}
                                                        multiline={false}
                                                        label="First Name"
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <div className="login__form-input">
                                                    <AppInput
                                                        placeholder="Last Name"
                                                        name="lastname"
                                                        handleChange={handleChange("lastname")}
                                                        icon={<AccountBoxIcon />}
                                                        value={values.lastname}
                                                        multiline={false}
                                                        label="Last Name"
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className="login__form-input">
                                                    <AppInput
                                                        placeholder="Enter your nickname"
                                                        name="nickname"
                                                        handleChange={handleChange("nickname")}
                                                        icon={<EmailIcon />}
                                                        value={values.nickname}
                                                        multiline={false}
                                                        label="Nickname"
                                                    />
                                                </div>
                                            </Grid>
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
                                            <Grid item xs={12}>
                                                <div className="login__form-input">
                                                    <AppInput
                                                        placeholder="Confirm Password"
                                                        name="confirmPassword"
                                                        handleChange={handleChange(
                                                            "confirmPassword"
                                                        )}
                                                        isPassword
                                                        value={values.confirmPassword}
                                                        multiline={false}
                                                        label="Confirm-Password"
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <div className="login__form-button">
                                                    <AppButton
                                                        text="Create account"
                                                        onClick={() => handleSubmit()}
                                                        backgroundColor="#1976d2"
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <div className="login__form-button">
                                                    <AppButton
                                                        text={
                                                            width >= 600
                                                                ? "Login with Google"
                                                                : "Google"
                                                        }
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
