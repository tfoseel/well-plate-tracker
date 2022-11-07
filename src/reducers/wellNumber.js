export const WELL_0 = "WELLNUMBER/WELL_0";
export const WELL_24 = "WELLNUMBER/WELL_24";
export const WELL_48 = "WELLNUMBER/WELL_48";
export const WELL_96 = "WELLNUMBER/WELL_96";
export const WELL_384 = "WELLNUMBER/WELL_384";

export const changeWellNumber = (n) => ({
    type: "WELLNUMBER/WELL_" + n,
});

/* Initial state */
const initalState = {
    row: 0,
    col: 0,
};

/* Reducer */
const wellNumber = (state = initalState, action) => {
    switch (action.type) {
        case WELL_0:
            return {
                row: 0,
                col: 0,
            };
        case WELL_24:
            return {
                row: 4,
                col: 6,
            };
        case WELL_48:
            return {
                row: 6,
                col: 8,
            };
        case WELL_96:
            return {
                row: 8,
                col: 12,
            };
        case WELL_384:
            return {
                row: 16,
                col: 24,
            };
        default:
            return state;
    }
};

export default wellNumber;
