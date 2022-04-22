import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider as ThemeProviders } from "styled-components";

import "./App.css";
import { myTheme } from "./styles/theme";
import { ComponentAppRoute } from "./components/AppRoute";
import { routes } from "./configs/routes";
import { IRoute } from "./interfaces/route";
import { useAppSelector, selectApp } from "@redux";
import { AppSnackBar } from "@components";

export const App = () => {
    const app = useAppSelector(selectApp);
    console.log(app);
    return (
        <ThemeProviders theme={myTheme(app.theme)}>
            <StyledModuleApp>
                <div className="App">
                    <AppSnackBar />
                    <BrowserRouter>
                        <Switch>
                            {routes.map((e: IRoute, key) => (
                                <ComponentAppRoute key={key} {...e} />
                            ))}
                        </Switch>
                    </BrowserRouter>
                </div>
            </StyledModuleApp>
        </ThemeProviders>
    );
};
const StyledModuleApp = styled.div`
    background-color: ${(p) => p.theme.colors.darkBackground} !important;
`;
