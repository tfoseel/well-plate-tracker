import { useSelector } from "react-redux";

import "../styles.css";

export default function WellNumberButton({ wellNumber, onClick }) {
    /* Use redux state */
    const { row, col } = useSelector((state) => state.wellNumber);
    return (
        <div className="col-md-3 col-sm-6 mt-2 mb-2">
            <div
                className={
                    "entry-button btn " +
                    (wellNumber === row * col
                        ? "btn-primary"
                        : "btn-outline-primary")
                }
                style={{ width: "100%" }}
                onClick={onClick}
            >
                {wellNumber}
            </div>
        </div>
    );
}
