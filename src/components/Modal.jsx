import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../styles.css";

import ColorPalette from "../components/ColorPalette";

import { updateWellState } from "../reducers/wellState";

/* Helper functions */
const getColorSet = (wellState) => {
    const colorSet = new Set();
    ["red", "green", "blue"].forEach((c) => colorSet.add(c));
    wellState.forEach((row) =>
        row.forEach((well) => {
            colorSet.add(well.color);
        })
    );
    return Array.from(colorSet);
};

const getPosList = (selected) => {
    const posList = [];
    selected.forEach((row, alphabet) =>
        row.forEach((well, digit) => {
            if (well) {
                posList.push(
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[alphabet] + (digit + 1)
                );
            }
        })
    );
    return posList;
};

// "selected" is from Design page, and it stores what wells are selected now.
export default function Modal({ isVisible, selected, closeFunction }) {
    /* Use redux state */
    const wellState = useSelector((state) => state.wellState);
    const dispatch = useDispatch();

    /* Manage modal state */
    const [modalContents, setModalContents] = useState({
        color: "",
        label: "",
    });

    return (
        <div
            className="modal"
            style={{ display: isVisible ? "block" : "none" }}
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Well Settings</h2>
                    <span>
                        <i
                            className="fas fa-check"
                            onClick={() => {
                                const posList = getPosList(selected);
                                dispatch(
                                    updateWellState(
                                        posList,
                                        modalContents.color,
                                        modalContents.label
                                    )
                                );
                                alert("Saved!");
                                closeFunction();
                            }}
                        ></i>
                        <span style={{ margin: "0 10px" }}></span>
                        <i className="fas fa-times" onClick={closeFunction}></i>
                    </span>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div
                            className="col-md-4 center-inside"
                            style={{
                                color:
                                    modalContents.color === ""
                                        ? "grey"
                                        : modalContents.color,
                            }}
                        >
                            Set color of selected wells...
                        </div>
                        <div className="col-md-4 center-inside">
                            {getColorSet(wellState).map(
                                (color, i) =>
                                    i <= 8 && (
                                        <ColorPalette
                                            key={"palette-" + i}
                                            color={color}
                                            preset={true}
                                            onClick={() =>
                                                setModalContents({
                                                    ...modalContents,
                                                    color,
                                                })
                                            }
                                        />
                                    )
                            )}
                        </div>
                        <div className="col-md-4 p-2 center-inside">
                            Pick color :
                            <ColorPalette
                                color="red"
                                preset={false}
                                onChange={(e) =>
                                    setModalContents({
                                        ...modalContents,
                                        color: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-4 center-inside"
                            style={{ color: "grey" }}
                        >
                            Label the selected wells...
                        </div>
                        <div className="col-md-8">
                            <input
                                onChange={(e) =>
                                    setModalContents({
                                        ...modalContents,
                                        label: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
