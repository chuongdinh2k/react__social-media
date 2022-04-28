import React, { useRef } from "react";
import {
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
import {
    AppInput,
    AppButton,
    ComponentPopOver,
    IconMessage,
    AppBadge,
    AppDrawer,
    AppSwitchTheme,
} from "..";
import { changeTheme, useAppSelector, selectAuth, signOut } from "@redux";
import { useDispatch } from "react-redux";
import { useDebounce } from "@hooks";
import axios from "axios";
import { shortenText } from "@utils";
import { appRoutesEnum, authRoutesEnum } from "@enums";
import { AppAvatar } from "..";

interface IOutSide {
    setOpenPopover: React.Dispatch<React.SetStateAction<boolean>>;
    ref: any;
}

// click outside
function useOutsideClick(props: IOutSide) {
    const { ref, setOpenPopover } = props;
    React.useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpenPopover(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export const AppTopBar = () => {
    // redux state
    const userInfo = useAppSelector(selectAuth).userInfo;
    const ref = useRef(null);
    const [openPopover, setOpenPopover] = React.useState<boolean>(false);
    useOutsideClick({ ref, setOpenPopover });
    // hooks
    const history = useHistory();
    const dispatch = useDispatch();
    // component state
    const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
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
        setTheme(value);
        dispatch(changeTheme(value ? "dark" : "light"));
    };
    const [searchTerm, setSearchTerm] = React.useState("");
    // API search results
    const [results, setResults] = React.useState([]);
    // Searching status (whether there is pending API request)
    const [isSearching, setIsSearching] = React.useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    // Effect for API call
    const handleSelectItem = (value: any) => {
        setSearchTerm(value);
    };
    React.useEffect(
        () => {
            searchCharacters("").then((results) => {
                setResults(results);
            });
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
    const handleChange = (value: string) => {
        setSearchTerm(value);
        setOpenPopover(true);
    };
    // API search function
    const searchCharacters = async (search: string) => {
        setIsSearching(true);
        try {
            const res = await axios.get(
                `https://60c0c446b8d3670017555cb3.mockapi.io/api/v1/users?search=${search}`
            );
            setIsSearching(false);
            return res.data;
        } catch (err) {
            setIsSearching(false);
            return [];
        }
    };
    return (
        <StyledAppTopBar>
            <Grid container justifyContent="space-between">
                <Grid item xs={8} md={5}>
                    <div className="header__right">
                        <div className="header__logo">
                            <DiamondIcon color="primary" fontSize="large" />
                        </div>
                        <div
                            className="header__search"
                            ref={ref}
                            onClick={() => setOpenPopover(!openPopover)}
                        >
                            <AppInput
                                handleChange={handleChange}
                                value={searchTerm}
                                placeholder="Find some one"
                                multiline
                            />
                            <ComponentPopOver
                                open={openPopover}
                                loadingDebounce={isSearching}
                                dataInputBounce={results}
                                onChangeDebounce={handleSelectItem}
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4} md={7}>
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
                                    onClick={() => history.push(appRoutesEnum.HOME)}
                                    colorIcon="#5486C1"
                                />
                            </span>
                            <span
                                className="header__menu-list"
                                onClick={() => history.push(appRoutesEnum.CHAT)}
                            >
                                <IconMessage fontSize="large" />
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
                                    <AppAvatar
                                        avatar={userInfo?.avatar}
                                        firstname={userInfo?.firstname}
                                    />
                                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                                    <a className="text">
                                        {shortenText(
                                            `${userInfo?.firstname} ${userInfo?.lastname}`,
                                            8
                                        )}
                                    </a>
                                    <ArrowDropDownIcon />
                                </Button>
                                <Popover
                                    id={id}
                                    open={open}
                                    onClose={handleClosePopover}
                                    anchorEl={anchorEl}
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
                                                    <ListItemButton
                                                        onClick={() => {
                                                            dispatch(signOut());
                                                            history.push(authRoutesEnum.LOGIN);
                                                        }}
                                                    >
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
