import { configureStore } from "@reduxjs/toolkit";

import wellNumber from "./reducers/wellNumber";
import wellState from "./reducers/wellState";

const store = configureStore({
    reducer: {
        wellNumber,
        wellState,
    },
});

export default store;
