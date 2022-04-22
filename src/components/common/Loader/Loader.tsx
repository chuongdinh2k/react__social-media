import React from "react";
import { CircularProgress } from "@mui/material";
type Props = {
    text?: string;
};

export const Loader = (props: Props) => {
    const { text } = props;
    return (
        <div>
            <CircularProgress />
            {text}
        </div>
    );
};
