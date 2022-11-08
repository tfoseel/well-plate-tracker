import "../styles.css";

export default function Cell({ pos, selected, color, label, onClick }) {
    return (
        <td id={"td-" + pos} key={pos} onClick={onClick}>
            <div
                id={"well-" + pos}
                className={"cell well" + (selected ? " well-selected" : "")}
                style={{ borderColor: color }}
            >
                <h5>{pos}</h5>
                <br />
                <h6>{label}</h6>
            </div>
        </td>
    );
}
