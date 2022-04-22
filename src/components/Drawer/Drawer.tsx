import * as React from "react";
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { StyledSideBarMenu, StyledDrawer } from ".";

type Anchor = "top" | "left" | "bottom" | "right";

interface IAppDrawerProps {
    anchor: Anchor;
    onClose?: () => void;
    open?: boolean;
}

export const AppDrawer = (props: IAppDrawerProps) => {
    const { anchor, onClose, open } = props;

    const list = (anchor: Anchor) => (
        <StyledSideBarMenu>
            <div className="sideBar__box" onKeyDown={onClose}>
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
            </div>
        </StyledSideBarMenu>
    );

    return (
        <StyledDrawer>
            <React.Fragment key={anchor}>
                <Drawer anchor={anchor} open={open} onClose={onClose}>
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        </StyledDrawer>
    );
};
