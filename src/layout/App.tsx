import React from "react";
import styled from "styled-components";
import { AppTopBar } from "@components";

type IProps = {
    children?: string | JSX.Element | JSX.Element[];
};

export const LayoutApp = (props: IProps) => {
    return (
        <StyleLyoutApp>
            <div className="content">
                {/* <AppTopBar /> */}
                {props.children}
            </div>
        </StyleLyoutApp>
    );
};

const StyleLyoutApp = styled.div`
    display: flex;
    justify-content: center;
    .content {
        width: 100%;
        padding: 0 40px;
        max-width: 1360px;
        height: 100vh;
        overflow: hidden;
        @media (max-width: 980px) {
            padding: 0 20px;
        }
        @media (max-width: 600px) {
            padding: 0 10px;
        }
    }
`;
