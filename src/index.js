import "./assets/styles/main.scss";

import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./assets/components/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
