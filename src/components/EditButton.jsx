export default function EditButton({ onClick }) {
    return (
        <div className="edit-button" onClick={onClick}>
            <i className="fas fa-edit"></i>
        </div>
    );
}
