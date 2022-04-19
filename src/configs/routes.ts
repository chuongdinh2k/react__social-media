import { appRoutesEnum, authRoutesEnum } from "../enums/routes";

import { LayoutAuth, LayoutApp } from "@layouts";
import { IRoute } from "../interfaces/route";
import { Home } from "@pages";
export const routes: Array<IRoute> = [
    { name: "Home", path: appRoutesEnum.HOME, exact: true, component: Home, layout: LayoutAuth },
    { name: "Login", path: authRoutesEnum.LOGIN, exact: true, component: Home, layout: LayoutApp },
];
