import React from "react";

import { AppTopBar, HomeContent } from "@components";
interface Props {
    test?: string;
}
export const Home = (props: Props) => {
    return (
        <div>
            <AppTopBar />
            <HomeContent />
        </div>
    );
};
