// If preset = false, user can select own color.
export default function ColorPalette({
    color = "grey",
    preset,
    onClick,
    onChange,
}) {
    return preset ? (
        <div
            className="palette"
            style={{ backgroundColor: preset ? color : "white" }}
            onClick={onClick}
        ></div>
    ) : (
        <div className="palette">
            <input type="color" style={{ width: "80%" }} onChange={onChange} />
        </div>
    );
}
