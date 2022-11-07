import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "../styles.css";

import WellNumberButton from "../components/WellNumberButton";
import ModeSelectButton from "../components/ModeSelectButton";

import { changeWellNumber } from "../reducers/wellNumber";

export default function Entry() {
    /* Use redux state */
    const dispatch = useDispatch();
    /* Use react router */
    const navigate = useNavigate();
    return (
        <div
            className="container center-inside"
            style={{ width: "100vw", height: "100vh" }}
        >
            <div>
                <div className="row mb-5">
                    <div className="col-md center-inside">
                        <div>
                            <img
                                className="logo"
                                src="images/icon.png"
                                alt="Error"
                            />
                        </div>
                    </div>
                    <div className="col-md title center-inside">
                        <div>Well Plate Tracker</div>
                    </div>
                </div>
                <div className="row mb-3">
                    <WellNumberButton
                        wellNumber={24}
                        onClick={() => dispatch(changeWellNumber(24))}
                    />
                    <WellNumberButton
                        wellNumber={48}
                        onClick={() => dispatch(changeWellNumber(48))}
                    />
                    <WellNumberButton
                        wellNumber={96}
                        onClick={() => dispatch(changeWellNumber(96))}
                    />
                    <WellNumberButton
                        wellNumber={384}
                        onClick={() => dispatch(changeWellNumber(384))}
                    />
                </div>
                <div className="row">
                    <ModeSelectButton
                        mode="1. Design"
                        onClick={() => navigate("/design")}
                    />
                    <ModeSelectButton
                        mode="2. Start"
                        onClick={() => navigate("/start")}
                    />
                </div>
            </div>
        </div>
    );
}
