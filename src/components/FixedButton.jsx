export default function EditButton({ onClick }) {
    return (
        <div
            className="btn btn-primary edit-button center-inside"
            onClick={onClick}
        >
            <i className="fas fa-pen"></i>
        </div>
    );
}
