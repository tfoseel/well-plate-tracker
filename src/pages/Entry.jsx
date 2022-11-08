import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "../styles.css";

import WellNumberButton from "../components/WellNumberButton";
import ModeSelectButton from "../components/ModeSelectButton";

import { changeWellNumber } from "../reducers/wellNumber";
import { initWellState } from "../reducers/wellState";

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
                <div className="row">
                    <div className="col-md center-inside mt-3 mb-3">
                        <div>
                            <img
                                className="logo"
                                src="images/icon.png"
                                alt="Error"
                            />
                        </div>
                    </div>
                    <div className="col-md title center-inside mt-3 mb-3">
                        <div>Well Plate Tracker</div>
                    </div>
                </div>
                <div className="row mb-3">
                    <WellNumberButton
                        wellNumber={24}
                        onClick={() => {
                            dispatch(changeWellNumber(24));
                            dispatch(initWellState(24));
                        }}
                    />
                    <WellNumberButton
                        wellNumber={48}
                        onClick={() => {
                            dispatch(changeWellNumber(48));
                            dispatch(initWellState(48));
                        }}
                    />
                    <WellNumberButton
                        wellNumber={96}
                        onClick={() => {
                            dispatch(changeWellNumber(96));
                            dispatch(initWellState(96));
                        }}
                    />
                    <WellNumberButton
                        wellNumber={384}
                        onClick={() => {
                            dispatch(changeWellNumber(384));
                            dispatch(initWellState(384));
                        }}
                    />
                </div>
                <div className="row">
                    <ModeSelectButton
                        icon="fas fa-pencil-ruler"
                        mode="Design"
                        onClick={() => navigate("/design")}
                    />
                    <ModeSelectButton
                        icon="fas fa-vial"
                        mode="Start"
                        onClick={() => navigate("/start")}
                    />
                </div>
            </div>
        </div>
    );
}
