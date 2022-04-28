import MessageIcon from "@mui/icons-material/Message";
import { IIconProps, StyledIcon } from ".";

export const IconMessage = (props: IIconProps) => {
    const { fontSize = "small", color = "white" } = props;
    return (
        <StyledIcon {...props}>
            <MessageIcon fontSize={fontSize} />
        </StyledIcon>
    );
};
