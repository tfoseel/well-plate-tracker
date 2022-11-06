import "../styles.css";

export default function Header({pos}) {
    return <td id={"td-" + pos} key={pos} className="header">
        <div className="cell">
            {pos}
        </div>
    </td>;
}