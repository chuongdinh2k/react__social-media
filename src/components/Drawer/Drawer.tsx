import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { StyledSideBarMenu } from ".";

type Anchor = "top" | "left" | "bottom" | "right";

interface IAppDrawerProps {
    anchor: Anchor;
    onClose?: () => void;
    open?: boolean;
}

export const AppDrawer = (props: IAppDrawerProps) => {
    const { anchor, onClose, open } = props;

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onKeyDown={onClose}
        >
            <StyledSideBarMenu>
                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </StyledSideBarMenu>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={anchor}>
                <Drawer anchor={anchor} open={open} onClose={onClose}>
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        </div>
    );
};
