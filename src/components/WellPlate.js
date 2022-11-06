import "../styles.css";
import React, { useState } from "react";

export default function WellPlate() {
    // Define ROW and COULMN of well plate.
    const ROW = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const COULMN = [...Array(12)].map((_, i) => i + 1);
    // What well is clicked.
    // const [wellColors, setWellColors] = useState(Array(96).fill(0));
    return (
        <table>
                        <tr>
                <td className="header"></td>
                {COULMN.map((n) => (
                <td className="header">{n}</td>
                ))}
            </tr>
            {ROW.map((r) => (
                <tr>
                <td className="header">{r}</td>
                {COULMN.map((n) => (
                    <td id={"well-" + r + n} key={r + n}>
                    {r}
                    {n}
                    </td>
                ))}
                </tr>
            ))}
        </table>
    );
}
