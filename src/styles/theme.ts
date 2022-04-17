import { createTheme } from "@mui/material/styles";
export const myTheme = {
    colors: {
        blue: "#5486C1",
        darkBlack: "#05141C",
        darkBackground: "#1B2730",
        backgroundInput: "#3B3E49",
    },
    breakPoints: {
        breakSmall: "320px",
        breakMobile: "375px",
        breakMobilePhone: "425px",
        breakMobileMedium: "575px",
        breakTablet: "767px",
        breakOnlyMobile: "768px",
        breakMedium: "980px",
        breakIpadPro: "1024px",
        breakLarge: "1200px",
        breakBig: "1366px",
        breakMaxBig: "1441px",
    },
};
const DEFAULT_THEME_CONFIG = {
    palette: {
        primary: {
            main: "#5486C1",
        },
    },
    spacing: 8,
};
export const theme = createTheme(DEFAULT_THEME_CONFIG);
