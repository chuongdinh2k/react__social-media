import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

interface IAppModal {
    children?: any;
    open?: boolean;
    handleClose?: () => void;
    showButtonMobile?: boolean;
}
export const AppModal = (props: IAppModal) => {
    const { children, open = false, handleClose, showButtonMobile } = props;
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <StyledModal>
                        {showButtonMobile && (
                            <span className="btn__cancelMobile" onClick={handleClose}>
                                <CancelIcon color="error" />
                            </span>
                        )}
                        {children}
                    </StyledModal>
                </Box>
            </Modal>
        </div>
    );
};

const StyledModal = styled.div`
    /* position: relative; */
    .btn__cancelMobile {
        display: none;
        position: absolute;
        z-index: 9;
        right: 0;
        top: 0;
        border-radius: 100%;
        cursor: pointer;
        @media (max-width: 768px) {
            display: block;
        }
    }
`;
