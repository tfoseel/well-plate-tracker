import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div
            className="center-inside title"
            style={{ width: "100vw", height: "100vh" }}
            onClick={() => navigate("/")}
        >
            <i
                className="far fa-question-circle"
                style={{ marginRight: "2%" }}
            ></i>
            Page Not Found...
        </div>
    );
}
