import { appRoutesEnum, authRoutesEnum } from "../enums/routes";

import { LayoutAuth, LayoutApp } from "@layouts";
import { IRoute } from "../interfaces/route";
import { Home, Login, About } from "@pages";
import { withRouter } from "react-router-dom";

export const routes: Array<IRoute> = [
    {
        name: "Login",
        path: authRoutesEnum.LOGIN,
        exact: true,
        component: Login,
        layout: LayoutAuth,
    },
    { name: "Home", path: appRoutesEnum.HOME, exact: true, component: Home },
    { name: "Home", path: appRoutesEnum.ABOUT, exact: true, component: About },
];
