import * as Yup from "yup";

export const formSchemaHomeInput = Yup.object().shape({
    status: Yup.string().required("Status is not allowed empty!"),
});

export const formSchemaCommentInput = Yup.object().shape({
    comment: Yup.string().required("Comment is not allowed empty!"),
});
// auth
export const formSchemaLoginForm = Yup.object().shape({
    email: Yup.string().trim().required("Email is required").email("Email is not valid!"),
    password: Yup.string().trim().required("Password is required"),
});
export const formSchemaSignUpForm = Yup.object().shape({
    email: Yup.string().trim().required("Email is required").email("Email is not valid!"),
    password: Yup.string().trim().required("Password is required"),
    lastname: Yup.string()
        .trim()
        .required("Last Name is required")
        .min(2, "Must be at least 2 characters")
        .max(15, "Must be less than 15 characters"),
    firstname: Yup.string()
        .trim()
        .required("First Name is required")
        .min(2, "Must be at least 2 characters")
        .max(15, "Must be less than 15 characters"),
    nickname: Yup.string()
        .trim()
        .required("Nick name is required")
        .min(2, "Nick name must be at least 2 characters")
        .max(15, "Nick name must be less than 8 characters"),
    confirmPassword: Yup.string()
        .trim()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
