import React, { forwardRef } from "react";
import { ErrorMessage } from "formik";
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { StyledAppInput, Error } from ".";

interface IAppInput {
    placeholder?: string;
    value?: string;
    handleChange: (value: string) => void;
    handleBlur?: (value: string) => void;
    name?: string;
    label?: string;
    error?: string;
    isPassword?: boolean;
    noError?: boolean;
    icon?: any;
    debounce?: boolean;
    multiline?: boolean;
    isBorder?: boolean;
}
export const AppInput = forwardRef((props: IAppInput, ref: any) => {
    const {
        handleChange,
        placeholder,
        multiline = true,
        isPassword,
        label,
        noError,
        value,
        name,
        icon,
        isBorder,
    } = props;
    // component state
    const [showPassword, setShowPassword] = React.useState(isPassword);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleOnChange = React.useCallback(
        (event: any) => {
            handleChange(event.target.value);
        },
        [handleChange]
    );
    return (
        <StyledAppInput isBorder={isBorder}>
            <FormControl className="formInput" sx={{ m: 1, width: "25ch" }} variant="outlined">
                {label && <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>}
                {isPassword ? (
                    <OutlinedInput
                        name={name}
                        id={`inpit-adornment-password-${name}`}
                        type={showPassword ? "password" : "text"}
                        value={value}
                        placeholder={placeholder}
                        onChange={handleOnChange}
                        autoComplete="off"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff color="primary" />
                                    ) : (
                                        <Visibility color="primary" />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        label={label}
                    />
                ) : (
                    <OutlinedInput
                        name={name}
                        id={`inpit-adornment-password-${name}`}
                        type="text"
                        value={value}
                        onChange={handleOnChange}
                        placeholder={placeholder}
                        multiline={multiline}
                        maxRows={50}
                        autoComplete="off"
                        endAdornment={
                            icon && (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {icon}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                        label={label}
                    />
                )}
            </FormControl>
            {noError || (name && <ErrorMessage name={name} component={Error} />)}
            {/* {debounce ? <ComponentPopOver open={debounce} /> : "not debounce"} */}
        </StyledAppInput>
    );
});
