import React from "react";

import { StyledAppTopBar } from "./styles";
import { AppInput } from "..";

export const AppTopBar = () => {
    const [value, setValue] = React.useState("");
    console.log(value);
    return (
        <StyledAppTopBar>
            <AppInput
                value={value}
                placeholder="Enter something to search"
                handleChange={(e) => setValue(e)}
            />
        </StyledAppTopBar>
    );
};
