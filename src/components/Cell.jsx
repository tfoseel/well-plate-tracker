import "../styles.css";

export default function Cell({pos}) {
    return <td id={"td-" + pos} key={pos}>
        <div className="cell well" id={"well-" + pos}>
            {pos}
        </div>
    </td>;
}