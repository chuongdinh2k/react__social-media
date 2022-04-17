import React from "react";

import { AppTopBar } from "@components";

interface Props {
    test?: string;
}

export const Home = (props: Props) => {
    return (
        <div>
            <AppTopBar />
            <p>Home</p>
        </div>
    );
};
