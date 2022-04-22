import React from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
    const history = useHistory();
    return (
        <div>
            <span onClick={() => history.push("/")}>clickme</span>
        </div>
    );
};
