import * as Yup from "yup";

export const formSchemaHomeInput = Yup.object().shape({
    status: Yup.string().required("Status is not allowed empty!"),
});
