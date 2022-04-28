import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

import { AppModal } from "..";

type Props = {
    text?: string;
    loading?: boolean;
    full?: boolean;
};

export const Loader = (props: Props) => {
    const { text, loading = true, full } = props;
    return (
        <StyledLoader>
            {full ? (
                <AppModal open={loading} children={<CircularProgress />}></AppModal>
            ) : (
                <div className="loader__wrapper">
                    <CircularProgress />
                </div>
            )}
        </StyledLoader>
    );
};

const StyledLoader = styled.div``;
