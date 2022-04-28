import { createTheme } from "@mui/material/styles";

export const myTheme = (mode: any) => {
    return {
        colors: {
            blue: "#5486C1",
            red: "#f8485e",
            darkBlack: `${mode === "light" ? "white" : "#1B2730"}`,
            darkBackground: `${mode === "light" ? "white" : "#1B2730"}`,
            backgroundInput: `${mode === "light" ? "white" : "#3B3E49"}`,
            drawer: {
                backgroundDrawer: `${mode === "light" ? "#1A1C1E" : "#F7F5F2"}`,
                textDrawer: `${mode === "light" ? "#F7F5F2" : "black"}`,
            },
            text: `${mode === "light" ? "black" : "#F7F5F2"}`,
            boxShadow: `${
                mode === "light"
                    ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
                    : "none"
            }`,
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
