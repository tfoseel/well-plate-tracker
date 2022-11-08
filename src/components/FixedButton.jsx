export default function FixedButton({ icon, top, left, onClick }) {
    return (
        <div
            className="btn btn-primary fixed-button center-inside"
            onClick={onClick}
            style={{ top, left }}
        >
            <i className={icon} />
        </div>
    );
}
