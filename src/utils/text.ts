export const numberReacts = (value: any) => {
    if (value > 1000) {
        return `${(value / 1000).toFixed(1)}k`;
    } else return value;
};
