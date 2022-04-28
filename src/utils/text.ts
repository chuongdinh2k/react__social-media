export const numberReacts = (value: any) => {
    if (value > 1000) {
        return `${(value / 1000).toFixed(1)}k`;
    } else return value;
};

// what: display three dot if text too long
export const shortenText = (text: string | undefined, limit: number) => {
    return text && text.length > limit ? `${text.substring(0, limit)}...` : text;
};

export const getFirstLetter = (text: string | undefined) => {
    return text && text.charAt(0);
};
