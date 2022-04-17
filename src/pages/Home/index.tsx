import React from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { AppTopBar, MyButton } from "@components";

interface Props {
    test?: string;
}

export const Home = (props: Props) => {
    return (
        <div>
            <AppTopBar />
            <MyButton text="Create Account" positionIcon="end" icon={<VisibilityOff />} />
            <p>Home</p>
        </div>
    );
};
