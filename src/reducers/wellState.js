export const WELL_0 = "WELLSTATE/WELL_0";
export const WELL_24 = "WELLSTATE/WELL_24";
export const WELL_48 = "WELLSTATE/WELL_48";
export const WELL_96 = "WELLSTATE/WELL_96";
export const WELL_384 = "WELLSTATE/WELL_384";
export const UPDATE = "WELLSTATE/UPDATE";

/* Helper functions */
export const init2DArray = (row, col, element) => {
    let arr = Array.from(Array(row), () => new Array(col));
    arr.map((a) => a.fill(element));
    return arr;
};

// ex. getIndex("A3") returns { y: 0, x: 2 }.
export const getIndex = (pos) => ({
    y: pos.charCodeAt(0) - "A".charCodeAt(0),
    x: Number(pos.substring(1, pos.length)) - 1,
});

/* State change functions */
export const initWellState = (n) => ({ type: "WELLSTATE/WELL_" + n });

// ex. posList = ["A2", "A5", "C5", ...]
export const updateWellState = (posList, color, label) => ({
    type: UPDATE,
    posList,
    color,
    label,
});

/* Initial state */
const initalState = [];

/* Reducer */
const wellState = (state = initalState, action) => {
    switch (action.type) {
        case WELL_24:
            return init2DArray(4, 6, { color: "grey", label: "" });
        case WELL_48:
            return init2DArray(6, 8, { color: "grey", label: "" });
        case WELL_96:
            return init2DArray(8, 12, { color: "grey", label: "" });
        case WELL_384:
            return init2DArray(16, 24, { color: "grey", label: "" });
        case UPDATE:
            const copy = JSON.parse(JSON.stringify(state));
            action.posList.forEach((pos) => {
                let { y, x } = getIndex(pos);
                copy[y][x].color = action.color;
                copy[y][x].label = action.label;
            });
            return copy;
        default:
            return state;
    }
};

export default wellState;
