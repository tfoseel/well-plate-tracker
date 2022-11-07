import "../styles.css";

export default function WellNumberButton({
    wellNumber,
    currentWellNumber,
    onClick,
}) {
    return (
        <div className="col-md-3 col-sm-6" onClick={onClick}>
            <div
                className={
                    "btn " +
                    (wellNumber === currentWellNumber
                        ? "btn-primary"
                        : "btn-outline-primary")
                }
                style={{ width: "100%" }}
            >
                {wellNumber}
            </div>
        </div>
    );
}
