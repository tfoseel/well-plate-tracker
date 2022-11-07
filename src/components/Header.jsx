import "../styles.css";

export default function Header({ pos, onClick }) {
    return (
        <td id={"td-" + pos} key={pos} className="header" onClick={onClick}>
            <div className="cell" id={"header-" + pos}>
                {pos}
            </div>
        </td>
    );
}
