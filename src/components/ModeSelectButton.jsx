import "../styles.css";

export default function ModeSelectButton({ mode, onClick }) {
    return (
        <div className="col-md-6" onClick={onClick}>
            <div
                className={"btn btn-outline-primary"}
                style={{ width: "100%" }}
            >
                {mode}
            </div>
        </div>
    );
}
