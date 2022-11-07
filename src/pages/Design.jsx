import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "../styles.css";

import Header from "../components/Header";
import Cell from "../components/Cell";
import EditButton from "../components/EditButton";

import { init2DArray, getIndex, updateWellState } from "../reducers/wellState";

export default function Design() {
    /* Use redux state */
    const dispatch = useDispatch();
    const { row, col } = useSelector((state) => state.wellNumber);
    const wellState = useSelector((state) => state.wellState);

    /* Use react navigation */
    const navigate = useNavigate();
    useEffect(() => {
        if (row === 0 && col === 0) navigate("/");
    });

    /* Define ROW and COULMN of well plate */
    const ROW = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".substring(0, row).split("");
    const COULMN = [...Array(col)].map((_, i) => i + 1);

    /* Manage selected cells */
    const [selected, setSelected] = useState(init2DArray(row, col, false));

    /* Helper functions */
    const isIthRowAllSelected = (pos) => {
        return selected[pos.charCodeAt(0) - "A".charCodeAt(0)].every(
            (e) => e === true
        );
    };

    const isIthColAllSelected = (pos) => {
        let result = true;
        Array(row)
            .fill(0)
            .forEach((_, i) => {
                result = selected[i][Number(pos) - 1] && result;
            });
        return result;
    };

    /* Handle click event */
    const handleClick = (e) => {
        const copy = [...selected];
        const [type, pos] = e.target.id.split("-");
        if (type === "well") {
            const { y, x } = getIndex(pos);
            copy[y][x] = !copy[y][x];
        } else if (pos.match(/[A-Z]/i)) {
            if (isIthRowAllSelected(pos)) {
                // Unselect all wells in the row.
                Array(col)
                    .fill(0)
                    .forEach(
                        (_, i) =>
                            (copy[pos.charCodeAt(0) - "A".charCodeAt(0)][
                                i
                            ] = false)
                    );
            } else {
                // Select all wells in the row.
                Array(col)
                    .fill(0)
                    .forEach(
                        (_, i) =>
                            (copy[pos.charCodeAt(0) - "A".charCodeAt(0)][
                                i
                            ] = true)
                    );
            }
        } else if (!isNaN(Number(pos))) {
            if (isIthColAllSelected(pos)) {
                // Unselect all wells in the column.
                Array(row)
                    .fill(0)
                    .forEach((_, i) => (copy[i][Number(pos) - 1] = false));
            } else {
                // Select all wells in the column.
                Array(row)
                    .fill(0)
                    .forEach((_, i) => (copy[i][Number(pos) - 1] = true));
            }
        }
        setSelected(copy);
    };
    return (
        <div
            className="center-inside table-wrapper"
            style={{ width: "100vw", height: "100vh" }}
        >
            <EditButton onClick={() => console.log(wellState)} />
            <table>
                <tbody className="table">
                    <tr>
                        <td className="header table-origin"></td>
                        {COULMN.map((n) => (
                            <Header pos={n} key={n} onClick={handleClick} />
                        ))}
                    </tr>
                    {ROW.map((r) => (
                        <tr key={"row-" + r}>
                            <Header pos={r} key={r} onClick={handleClick} />
                            {COULMN.map((n) => (
                                <Cell
                                    key={r + n}
                                    pos={r + n}
                                    selected={
                                        selected[getIndex(r + n).y][
                                            getIndex(r + n).x
                                        ]
                                    }
                                    onClick={handleClick}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
