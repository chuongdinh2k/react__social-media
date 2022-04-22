import moment from "moment";
export const timeFromNow = (time: string | undefined) => {
    return time && moment().startOf("day").fromNow();
};
