import React, { useState } from "react";

import "../styles.css";

import WellNumberButton from "./WellNumberButton";
import ModeSelectButton from "./ModeSelectButton";

export default function Entry() {
    const [currentWellNumber, setCurrentWellNumber] = useState(0);
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
                        currentWellNumber={currentWellNumber}
                        onClick={() => setCurrentWellNumber(24)}
                    />
                    <WellNumberButton
                        wellNumber={48}
                        currentWellNumber={currentWellNumber}
                        onClick={() => setCurrentWellNumber(48)}
                    />
                    <WellNumberButton
                        wellNumber={96}
                        currentWellNumber={currentWellNumber}
                        onClick={() => setCurrentWellNumber(96)}
                    />
                    <WellNumberButton
                        wellNumber={384}
                        currentWellNumber={currentWellNumber}
                        onClick={() => setCurrentWellNumber(384)}
                    />
                </div>
                <div className="row">
                    <ModeSelectButton mode="1. Design" />
                    <ModeSelectButton mode="2. Start" />
                </div>
            </div>
        </div>
    );
}
