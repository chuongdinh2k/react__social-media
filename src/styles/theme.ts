import { createTheme } from "@mui/material/styles";

export const myTheme = (mode: any) => {
    return {
        colors: {
            blue: "#5486C1",
            red: "#f8485e",
            darkBlack: `${mode === "light" ? "white" : "#1B2730"}`,
            darkBackground: `${mode === "light" ? "white" : "#1B2730"}`,
            backgroundInput: "#3B3E49",
            drawer: {
                backgroundDrawer: `${mode === "light" ? "#1A1C1E" : "white"}`,
                textDrawer: `${mode === "light" ? "white" : "black"}`,
            },
            text: `${mode === "light" ? "black" : "white"}`,
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
};
const DEFAULT_THEME_CONFIG = {
    palette: {
        primary: {
            main: "#5486C1",
        },
        secondary: {
            main: "#ffffff",
        },
    },
    spacing: 8,
};
export const theme = createTheme(DEFAULT_THEME_CONFIG);
