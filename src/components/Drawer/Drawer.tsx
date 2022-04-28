import * as React from "react";
import { Avatar, Drawer } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import LogoutIcon from "@mui/icons-material/Logout";
import MessageIcon from "@mui/icons-material/Message";
import HomeIcon from "@mui/icons-material/Home";

import { StyledSideBarMenu, StyledDrawer } from ".";
import { avatar } from "@mockup";
import { AppSwitchTheme } from "../common";
import { changeTheme } from "@redux";
import { useDispatch } from "react-redux";

type Anchor = "top" | "left" | "bottom" | "right";

interface IAppDrawerProps {
    anchor: Anchor;
    onClose?: () => void;
    open?: boolean;
}

export const AppDrawer = (props: IAppDrawerProps) => {
    const { anchor, onClose, open } = props;
    // hooks
    const dispatch = useDispatch();
    // componet state
    const [theme, setTheme] = React.useState<boolean>(false);
    const handleChangeTheme = (value: any) => {
        setTheme(value);
        dispatch(changeTheme(value ? "dark" : "light"));
    };

    const list = (anchor: Anchor) => (
        <StyledSideBarMenu>
            <div className="sidebar" onKeyDown={onClose}>
                {/* <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List> */}
                <ul className="sidebar__box">
                    <li className="sidebar__list ">
                        {/* <DiamondIcon />
                        <span>
                            <span>D</span>iamond Social Media
                        </span> */}
                        <a className="sidebar__item">
                            <span className="sidebar__item-icon">
                                <DiamondIcon />
                            </span>
                            <span>
                                <span className="highlight">D</span>iamond Social Media
                            </span>
                        </a>
                    </li>
                    <li className="sidebar__list">
                        <a className="sidebar__item">
                            <span className="sidebar__item-icon">
                                <Avatar src={avatar} alt="avatar" />
                            </span>
                            <span className="sidebar__item-text username">Dinh Van Chuong</span>
                        </a>
                    </li>
                    <li className="sidebar__list">
                        <a className="sidebar__item">
                            <span className="sidebar__item-icon">
                                <HomeIcon />
                            </span>
                            <span className="sidebar__item-text">Home</span>
                        </a>
                    </li>
                    <li className="sidebar__list">
                        <a className="sidebar__item">
                            <span className="sidebar__item-icon">
                                <MessageIcon />
                            </span>
                            <span className="sidebar__item-text">Chatting</span>
                        </a>
                    </li>
                    <li className="sidebar__list">
                        <a className="sidebar__item">
                            <span className="sidebar__item-icon">
                                <LogoutIcon />
                            </span>
                            <span className="sidebar__item-text">Sign Out</span>
                        </a>
                    </li>
                    <li className="sidebar__list">
                        <a className="sidebar__item">
                            <AppSwitchTheme checked={theme} handleOnChange={handleChangeTheme} />
                        </a>
                    </li>
                </ul>
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
