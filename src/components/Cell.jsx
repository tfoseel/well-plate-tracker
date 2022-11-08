import "../styles.css";

export default function Cell({ pos, selected, color, label, onClick }) {
    return (
        <td value={"well-" + pos} key={pos} onClick={onClick}>
            <div
                className={"cell well" + (selected ? " well-selected" : "")}
                style={{
                    position: "relative",
                    borderColor: color,
                    color: color,
                }}
                value={"well-" + pos}
            >
                <h6>{label}</h6>
                <div className="well-position" value={"well-" + pos}>
                    {pos}
                </div>
            </div>
        </td>
    );
}
