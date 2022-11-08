import { useSelector } from "react-redux";

import "../styles.css";

export default function ModeSelectButton({ mode, onClick }) {
    /* Use redux state */
    const { row, col } = useSelector((state) => state.wellNumber);
    return (
        <div className="col-md-6 mt-2 mb-2">
            <div
                className={
                    "entry-button btn btn-outline-primary" +
                    (row * col === 0 ? "btn-outline-secondary disabled" : "")
                }
                style={{ width: "100%" }}
                onClick={onClick}
                disabled={row * col === 0}
            >
                {mode}
            </div>
        </div>
    );
}
