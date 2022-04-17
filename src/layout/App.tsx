import React from "react";

type IProps = {
    children?: string | JSX.Element | JSX.Element[];
};

export const LayoutApp = (props: IProps) => {
    return <div>{props.children}</div>;
};
