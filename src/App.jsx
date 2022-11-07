import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Entry from "./pages/Entry";
import Design from "./pages/Design";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Entry />}></Route>
                    <Route path="/design" element={<Design />}></Route>
                    {/* Not matching */}
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
