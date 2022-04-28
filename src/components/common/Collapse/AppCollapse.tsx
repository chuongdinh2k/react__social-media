import React from "react";
import { Collapse } from "@mui/material";
import styled from "styled-components";
import clsx from "clsx";

interface IProps {
    title?: string;
    children?: JSX.Element;
    open?: boolean;
}
export const AppCollaspe = (props: IProps) => {
    const { children, title, open } = props;

    return (
        <StyledComponentCollapse>
            <div
                // onClick={handleChange}
                className={`wrapperCollapse ${clsx(open ? "active" : "")}`}
            >
                <Collapse in={open}>{children}</Collapse>
            </div>
        </StyledComponentCollapse>
    );
};

const StyledComponentCollapse = styled.div<IProps>`
    .wrapperCollapse {
        padding: 10px;
        /* margin-bottom: 2rem; */
        border-radius: 10px;
    }
    .active {
        /* background-color: #f4f4f4; */
        border: none;
    }
    .collapse__header {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        &-title {
            font-size: 1.8rem;
        }
        &-icon {
            padding-top: 0.5rem;
        }
    }
`;
