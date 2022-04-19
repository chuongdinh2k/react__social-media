import React from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Formik } from "formik";

import { AppTopBar, AppDrawer, AppButton, AppSelect, AppInput, AppSwitchTheme } from "@components";
import { Button, Switch } from "@mui/material";
import { changeTheme, useAppSelector, selectApp } from "@redux";
import { useDispatch } from "react-redux";

interface Props {
    test?: string;
}
const selectOptions = [
    { name: "Jone", value: "Jone" },
    { name: "Jack", value: "Jack" },
];
export const Home = (props: Props) => {
    const app = useAppSelector(selectApp);
    const dispatch = useDispatch();
    // value input
    const [selectedValue, setSelectedValue] = React.useState("");
    // open drawer
    const [open, setOpen] = React.useState(false);
    const handleOnCloseDrawer = () => {
        setOpen(false);
    };
    const [openDebounce, setOpenDebounce] = React.useState<boolean>(false);
    const handleChange = (e: any) => {
        setSelectedValue(e.target.value);
    };

    // value Swicth
    const [valueSwitch, setValueSwitch] = React.useState<boolean>(true);
    const handleOnChangeSwitchTheme = (value: any) => {
        dispatch(changeTheme(value ? "dark" : "light"));
        setValueSwitch(value);
    };
    console.log(app);

    return (
        <div>
            <Formik
                initialValues={{
                    valueInput: "",
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                }}
            >
                {({ handleSubmit, values, handleChange }) => {
                    return (
                        <>
                            <AppInput
                                debounce={openDebounce}
                                value={values.valueInput}
                                name="valueInput"
                                handleChange={handleChange("valueInput")}
                            />
                            <AppButton onClick={handleSubmit} type="submit" text="Click me" />
                        </>
                    );
                }}
            </Formik>
            <AppTopBar />
            <AppSelect options={selectOptions} value={selectedValue} handleChange={handleChange} />
            {/* drawer */}
            <Button color="primary" onClick={() => setOpen(true)}>
                Show
            </Button>
            <AppDrawer anchor="right" open={open} onClose={handleOnCloseDrawer} />
            <AppSwitchTheme checked={valueSwitch} handleOnChange={handleOnChangeSwitchTheme} />
            <p>Home</p>
        </div>
    );
};
