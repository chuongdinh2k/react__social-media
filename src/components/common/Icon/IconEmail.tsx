import EmailIcon from "@mui/icons-material/Email";

import { IIconProps, StyledIcon } from ".";

export const IconEmail = (props: IIconProps) => {
    const { fontSize = "small", color = "white" } = props;
    return (
        <StyledIcon {...props}>
            <EmailIcon fontSize={fontSize} />
        </StyledIcon>
    );
};
