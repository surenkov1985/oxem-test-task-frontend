import "./assets/styles/main.scss";

import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./assets/components/App";

const container = document.getElementById("root");
const root = createRoot(container);
import {store} from "./assets/redux/store"
import { Provider } from "react-redux";

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
