import React, { useState } from "react";

import "../styles.css";

export default function Cell({pos}) {
    const [color, setColor] = useState("black");
    const onClick = () => {
        setColor(color === "black" ? "red" : "black");
    }
    return <td id={"td-" + pos} key={pos}>
        <div className="cell well" id={"well-" + pos} style={{backgroundColor: color}} onClick={onClick}>
            {pos}
        </div>
    </td>;
}