import { appRoutesEnum } from "../enums/routes";

import { IRoute } from "../interfaces/route";
import { Home } from "../pages";

export const routes: Array<IRoute> = [
    { name: "Home", path: appRoutesEnum.HOME, exact: true, component: Home },
];
