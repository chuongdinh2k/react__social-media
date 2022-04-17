import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

import { ComponentAppRoute } from "./components/AppRoute";
import { routes } from "./configs/routes";
import { IRoute } from "./interfaces/route";

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    {routes.map((e: IRoute, key) => (
                        <ComponentAppRoute key={key} {...e} />
                    ))}
                </Switch>
            </BrowserRouter>
        </div>
    );
};
