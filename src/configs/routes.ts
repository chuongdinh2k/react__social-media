import { appRoutesEnum, authRoutesEnum } from "../enums/routes";

import { LayoutAuth } from "@layouts";
import { IRoute } from "../interfaces/route";
import { Home, Login, About, Chat, SignUp } from "@pages";

export const routes: Array<IRoute> = [
    {
        name: "Login",
        path: authRoutesEnum.LOGIN,
        exact: true,
        component: Login,
        layout: LayoutAuth,
    },
    {
        name: "Signup",
        path: authRoutesEnum.SIGNUP,
        exact: true,
        component: SignUp,
        layout: LayoutAuth,
    },
    { name: "Home", path: appRoutesEnum.HOME, exact: true, component: Home },
    { name: "Home", path: appRoutesEnum.CHAT, exact: true, component: Chat },
    { name: "Home", path: appRoutesEnum.ABOUT, exact: true, component: About },
];
