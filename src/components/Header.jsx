import "../styles.css";

export default function Header({ pos, onClick }) {
    return (
        <th
            value={"header-" + pos}
            key={pos}
            className="header"
            onClick={onClick}
        >
            <div className="cell" value={"header-" + pos}>
                {pos}
            </div>
        </th>
    );
}
