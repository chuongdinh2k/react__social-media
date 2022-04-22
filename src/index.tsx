import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { store, persistor } from "../src/redux";
import { theme } from "./styles/theme";

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <ThemeProvider theme={theme}>
//             {/* <ThemeProviders theme={myTheme(store)}> */}
//             <React.StrictMode>
//                 <App />
//             </React.StrictMode>
//             {/* </ThemeProviders> */}
//         </ThemeProvider>
//     </Provider>
// );

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            {/* <ThemeProviders theme={myTheme(store)}> */}
            <React.StrictMode>
                <App />
            </React.StrictMode>
            {/* </ThemeProviders> */}
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
