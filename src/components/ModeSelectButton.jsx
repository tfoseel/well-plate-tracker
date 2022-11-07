import { useSelector } from "react-redux";

import "../styles.css";

export default function ModeSelectButton({ mode, onClick }) {
    /* Use redux state */
    const { row, col } = useSelector((state) => state.wellNumber);
    return (
        <div className="col-md-6" onClick={onClick}>
            <div
                className={
                    "btn " +
                    (row * col === 0
                        ? "btn-outline-secondary disabled"
                        : "btn-outline-primary")
                }
                style={{ width: "100%" }}
            >
                {mode}
            </div>
        </div>
    );
}
