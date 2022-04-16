import React from "react";
import { ILayout } from "@interfaces";

type IProps = {
    children?: string | JSX.Element | JSX.Element[];
};

export const LayoutApp = (props: IProps) => {
  return;
  <div>{props.children}</div>;
};
