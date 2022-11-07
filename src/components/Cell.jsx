import "../styles.css";

export default function Cell({ pos, selected, onClick }) {
    return (
        <td id={"td-" + pos} key={pos} onClick={onClick}>
            <div
                className={"cell well" + (selected ? " well-selected" : "")}
                id={"well-" + pos}
            >
                {pos}
            </div>
        </td>
    );
}
