import "../styles.css";

import Header from "./Header";
import Cell from "./Cell";

export default function WellPlate() {
    // Define ROW and COULMN of well plate.
    const ROW = "ABCDEFGH".split("");
    const COULMN = [...Array(12)].map((_, i) => i + 1);
    return (
        <div className="table-wrapper">
            <table className="table">
                <tr>
                    <td className="header table-origin"></td>
                    {COULMN.map(n => <Header pos={n} />)}
                </tr>
                {ROW.map(r => (
                    <tr>
                        <Header pos={r} />
                        {COULMN.map((n) => <Cell pos={r + n} />)}
                    </tr>
                ))}
            </table>
        </div>
    );
}
