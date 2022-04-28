import React from "react";
import { authRoutesEnum } from "@enums";
import { selectAuth, useAppSelector } from "@redux";
import { Route, useHistory } from "react-router-dom";

import { IRoute } from "../interfaces/route";
import { LayoutApp } from "../layout";

export const ComponentAppRoute = (props: IRoute) => {
    const history = useHistory();
    //redux store
    const userInfo = useAppSelector(selectAuth).userInfo;
    React.useLayoutEffect(() => {
        if (!userInfo?.token) {
            history.push(authRoutesEnum.LOGIN);
        }
    }, []);
    // props
    const { path, exact, component, layout } = props;
    // page variable
    const Component = component;
    const Layout = layout || LayoutApp;
    return (
        <Route
            path={path}
            exact={exact}
            render={() => (
                <Layout>
                    <Component />
                </Layout>
            )}
        />
    );
};
