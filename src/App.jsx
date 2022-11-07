import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Entry from "./pages/Entry";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Entry />}></Route>
                    {/* Not matching */}
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
