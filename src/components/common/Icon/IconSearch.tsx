import SearchIcon from "@mui/icons-material/Search";

import { IIconProps, StyledIcon } from ".";

export const IconSearch = (props: IIconProps) => {
    const { fontSize = "small", color = "white" } = props;
    return (
        <StyledIcon {...props}>
            <SearchIcon fontSize={fontSize} />
        </StyledIcon>
    );
};
