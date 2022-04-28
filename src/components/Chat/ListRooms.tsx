import { Button, Grid, IconButton, Box, Tabs, Tab, Typography } from "@mui/material";
import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";

import { AppInput, IconSearch } from "..";
import { StyledListRooms } from "./styles";
import { RoomItem } from "./RoomItem";

type Props = {
    test?: string;
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export const ListRooms = (props: Props) => {
    const [roomName, setRoomName] = React.useState<string>("");
    const [value, setValue] = React.useState(0);

    const handleOnChange = (value: string) => {
        setRoomName(value);
    };
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <StyledListRooms>
            <div className="listRooms">
                <div className="listRooms__search">
                    <Grid container>
                        <Grid item xs={2}>
                            <span className="listRooms__search-title">Chat</span>
                        </Grid>
                        <Grid item xs={7}>
                            <div className="listRooms__search-input">
                                <AppInput
                                    value={roomName}
                                    placeholder="Enter a room name"
                                    handleChange={handleOnChange}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton aria-label="delete" size="medium">
                                <IconSearch />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2}>
                            <Button>
                                <AddBoxIcon />
                            </Button>{" "}
                        </Grid>
                    </Grid>
                </div>
                <div className="listRooms__list">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        TabIndicatorProps={{
                            style: {
                                display: "none",
                            },
                        }}
                    >
                        <Tab label="Group" {...a11yProps(0)} />
                        <Tab label="Person" {...a11yProps(1)} />
                    </Tabs>
                </div>
                <TabPanel value={value} index={0}>
                    <div>
                        <RoomItem />
                        <RoomItem />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <RoomItem type="person" />
                </TabPanel>
            </div>
        </StyledListRooms>
    );
};
