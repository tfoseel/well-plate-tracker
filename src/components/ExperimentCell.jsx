import "../styles.css";

export default function ExperimentCell({
    pos,
    selected,
    color,
    label,
    onClick,
}) {
    return (
        <td value={"well-" + pos} key={pos} onClick={onClick}>
            <div
                className={"cell well"}
                style={{
                    position: "relative",
                    borderColor: color,
                    backgroundColor: selected && color,
                    opacity: "50%",
                }}
                value={"well-" + pos}
            >
                <h6 value={"well-" + pos}>{label}</h6>
                <div className="well-position" value={"well-" + pos}>
                    {pos}
                </div>
            </div>
        </td>
    );
}
