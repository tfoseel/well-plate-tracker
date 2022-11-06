import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import WellPlate from "./components/WellPlate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <WellPlate />
    </React.StrictMode>
);
