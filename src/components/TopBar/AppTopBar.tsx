import React from "react";
import {
    Avatar,
    Button,
    Grid,
    Popover,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import HomeIcon from "@mui/icons-material/Home";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ReorderIcon from "@mui/icons-material/Reorder";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useHistory } from "react-router-dom";

import { StyledAppTopBar } from "./styles";
import { AppInput, AppButton, IconEmail, AppBadge, AppDrawer, AppSwitchTheme } from "..";
import { changeTheme } from "@redux";
import { useDispatch } from "react-redux";
import { useDebounce } from "@hooks";

export const AppTopBar = () => {
    // hooks
    const history = useHistory();
    const dispatch = useDispatch();
    // component state
    const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [input, setInput] = React.useState<string>("");
    const [theme, setTheme] = React.useState<boolean>(false);
    // component variable
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const handleClickPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };
    const handleChangeTheme = (value: any) => {
        console.log(value);
        setTheme(value);
        dispatch(changeTheme(value ? "dark" : "light"));
    };
    const [searchTerm, setSearchTerm] = React.useState("");
    // API search results
    const [results, setResults] = React.useState([]);
    // Searching status (whether there is pending API request)
    const [isSearching, setIsSearching] = React.useState(false);
    // Debounce search term so that it only gives us latest value ...
    // ... if searchTerm has not been updated within last 500ms.
    // The goal is to only have the API call fire when user stops typing ...
    // ... so that we aren't hitting our API rapidly.
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    // Effect for API call
    React.useEffect(
        () => {
            if (debouncedSearchTerm) {
                setIsSearching(true);
                searchCharacters(debouncedSearchTerm).then((results: any) => {
                    setIsSearching(false);
                    setResults(results);
                });
            } else {
                setResults([]);
                setIsSearching(false);
            }
        },
        [debouncedSearchTerm] // Only call effect if debounced search term changes
    );
    console.log(results);
    const handleChange = (value: string) => {
        setInput(value);
        setSearchTerm(value);
    };
    // API search function
    function searchCharacters(search: string) {
        return fetch(`https://60c0c446b8d3670017555cb3.mockapi.io/api/v1/users?search=${search}`, {
            method: "GET",
        })
            .then((r) => r.json())
            .then((r) => r.data.results)
            .catch((error) => {
                console.error(error);
                return [];
            });
    }
    return (
        <StyledAppTopBar>
            <Grid container justifyContent="space-between">
                <Grid item xs={8} md={4}>
                    <div className="header__right">
                        <div className="header__logo">
                            <DiamondIcon color="primary" fontSize="large" />
                        </div>
                        <div className="header__search">
                            <AppInput
                                handleChange={handleChange}
                                value={searchTerm}
                                placeholder="#jame"
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4} md={8}>
                    <div className="header__left">
                        <div className="header__menu">
                            <span className="header__menu-list">
                                <AppSwitchTheme
                                    checked={theme}
                                    handleOnChange={handleChangeTheme}
                                />
                            </span>
                            <span className="header__menu-list btnHome">
                                <AppButton
                                    icon={<HomeIcon color="primary" />}
                                    backgroundColor="white"
                                    text="Home"
                                    color="black"
                                    positionIcon="start"
                                    onClick={() => history.push("/about")}
                                    colorIcon="#5486C1"
                                />
                            </span>
                            <span className="header__menu-list">
                                <IconEmail fontSize="large" />
                            </span>
                            <span className="header__menu-list">
                                <AppBadge icon={<NotificationsIcon fontSize="large" />} />
                            </span>
                            <span className="header__menu-list">
                                <Button
                                    aria-describedby={id}
                                    onClick={handleClickPopover}
                                    className="header__menu-user"
                                >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <a className="text">Dinh Van Chuong</a>
                                    <ArrowDropDownIcon />
                                </Button>
                                <Popover
                                    id={id}
                                    open={open}
                                    onClose={handleClosePopover}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                >
                                    <div className="user__info">
                                        <span>
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemText primary="Profile" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem
                                                    disablePadding
                                                    // onClick={() =>
                                                    //     history.push(authRoutesEnum.LOGIN)
                                                    // }
                                                >
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <LogoutIcon />
                                                        </ListItemIcon>
                                                        <Link to="/login">
                                                            <ListItemText primary="Sign Out" />
                                                        </Link>
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </span>
                                    </div>
                                </Popover>
                            </span>
                        </div>
                    </div>
                    <div className="header__btnMobile" onClick={() => setOpenDrawer(true)}>
                        <ReorderIcon fontSize="large" />
                    </div>
                </Grid>
            </Grid>
            <AppDrawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)} />
        </StyledAppTopBar>
    );
};
