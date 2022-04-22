import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { ErrorMessage } from "formik";

import { StyledAppInput, Error } from ".";

interface IAppInputDebounce {
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
}
export const AppInputDebounce = (props: IAppInputDebounce) => {
    const { handleChange, placeholder, debounce, label, noError, value, name, icon } = props;
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleOnChange = React.useCallback(
        (event: any) => {
            handleChange(event.target.value);
            setAnchorEl(event.currentTarget);
        },
        [handleChange]
    );
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div>
            {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button> */}
            <StyledAppInput>
                <FormControl className="formInput" sx={{ m: 1, width: "25ch" }} variant="outlined">
                    {label && (
                        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                    )}
                    <OutlinedInput
                        name={name}
                        id={`inpit-adornment-password-${name}`}
                        value={value}
                        onChange={handleOnChange}
                        placeholder={placeholder}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" edge="end">
                                    {icon}
                                </IconButton>
                            </InputAdornment>
                        }
                        label={label}
                        aria-describedby={id}
                    />
                </FormControl>
                {noError || (name && <ErrorMessage name={name} component={Error} />)}
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                >
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                </Popover>
            </StyledAppInput>
        </div>
    );
};
