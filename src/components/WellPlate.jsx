import React, { useState } from "react";

import "../styles.css";

import Header from "./Header";
import Cell from "./Cell";

// Get 2D array.
const init2DArray = (row, col) => {
    let arr = Array.from(Array(row), () => new Array(col));
    arr.map((a) => a.fill(false));
    return arr;
};

// Get index from well number.
const getIndex = (pos) => ({
    y: pos.charCodeAt(0) - "A".charCodeAt(0),
    x: Number(pos.substring(1, pos.length)) - 1,
});

export default function WellPlate({ row, col }) {
    // Define ROW and COULMN of well plate.
    const ROW = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".substring(0, row).split("");
    const COULMN = [...Array(col)].map((_, i) => i + 1);
    // Manage selected cells.
    const [selected, setSelected] = useState(init2DArray(row, col));
    // Handle click event.
    const handleClick = (e) => {
        const copy = [...selected];
        const [type, pos] = e.target.id.split("-");
        if (type === "well") {
            const { y, x } = getIndex(pos);
            copy[y][x] = !copy[y][x];
        } else if (pos.match(/[A-Z]/i)) {
            for (let i = 0; i < col; i++)
                copy[pos.charCodeAt(0) - "A".charCodeAt(0)][i] = true;
        } else if (!isNaN(Number(pos))) {
            for (let i = 0; i < row; i++) copy[i][Number(pos) - 1] = true;
        }
        setSelected(copy);
    };
    return (
        <div
            className="center-inside table-wrapper"
            style={{ width: "100vw", height: "100vh" }}
        >
            <table>
                <tbody className="table">
                    <tr>
                        <td className="header table-origin"></td>
                        {COULMN.map((n) => (
                            <Header pos={n} key={n} onClick={handleClick} />
                        ))}
                    </tr>
                    {ROW.map((r) => (
                        <tr>
                            <Header pos={r} key={r} onClick={handleClick} />
                            {COULMN.map((n) => (
                                <Cell
                                    pos={r + n}
                                    key={r + n}
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
