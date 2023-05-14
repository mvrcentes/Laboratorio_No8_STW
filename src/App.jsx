import { useState, useEffect } from "react"
import "./App.css"

import { Routes, Route } from "react-router-dom"

import { Menu } from "./pages/Menu"
import { Game } from "./pages/Game"
import { Result } from "./pages/Result"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/game" element={<Game />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </div>
    )
}

export default App
