import React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { StyledAppSwitch } from "./styles";

interface IAppSwitchButton {
    label?: string;
    checked?: boolean;
    handleOnChange: (value: any) => void;
}

export const AppSwitch = (props: IAppSwitchButton) => {
    const { checked, label, handleOnChange } = props;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleOnChange(event.target.checked);
    };
    return (
        <StyledAppSwitch>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label={label}
                />
            </FormGroup>
        </StyledAppSwitch>
    );
};
