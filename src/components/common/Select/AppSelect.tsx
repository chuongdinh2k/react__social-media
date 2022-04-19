import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled from "styled-components";

import { StyledAppSelect } from ".";
import { StyledAppInput } from "..";

interface IAppSelectProps {
    labelStyle?: any;
    options?: any;
    style?: any;
    label?: string;
    placeholder?: string;
    request?: boolean;
    note?: string;
    error?: string;
    value?: string | Array<string>;
    defaultValue?: string;
    handleChange: (value: any) => void;
    // handleBlur: (value: any) => void;
    name?: string;
    disabled?: boolean;
    styleSelect?: any;
    multiple?: boolean;
    icon?: any;
}

export const AppSelect = (props: IAppSelectProps) => {
    const { options, handleChange, value } = props;
    return (
        <StyledAppInput>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    disabled={props.disabled}
                >
                    <MenuItem value="">None</MenuItem>
                    {options.map((item: any, index: number) => (
                        <MenuItem key={index} value={item.value}>
                            <StyledMenuItem>{item.name}</StyledMenuItem>
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>Without label</FormHelperText>
            </FormControl>
        </StyledAppInput>
    );
};

const StyledMenuItem = styled.div``;
